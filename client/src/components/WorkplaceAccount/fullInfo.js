import React, { Component } from 'react';
// import PropTypes from 'prop-types'; 

class WorkplaceAccount extends Component { //used class instead of const to enable prop-type validation
    render () {

        const labelMaker = (varName) => {
            // return varName.split(/(?=[A-Z])/).map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
            return varName.replace(/_/g, " ").replace("ctct", "CTCT").replace(/hr/, "HR").split(/\s/).map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
        }

        const handleBlank = (fieldName) => {
            if (this.props.companyInfo[fieldName] == null) {
                return " ";
            } else {
                return this.props.companyInfo[fieldName];
            }
        }

        const returnCompanyInfo = (companyInfoKey) => {
            return(
                <p>{labelMaker(companyInfoKey)}: <input onChange={this.props.handleChange} type="text" name={companyInfoKey} value={handleBlank(companyInfoKey)} /></p>
            );
        }

        // MOVE MANAGER EDITING FUNCTIONALITY TO ACCOUNT LIST PAGE
        // const returnAccountManager = () => {
            
        //     if (this.props.companyInfo["manager"]) { // NEED TO FIGURE OUT WHY THIS IS NECESSARY TO AVOID 'UNDEFINED' ERROR
        //         return (
        //             <p key="accountManager">Account Manager: <select onChange={this.props.handleChange} name="accountManager" value={this.props.companyInfo["manager"]["name"].toLowerCase()} >
        //                 <option value="gordon">Gordon</option>
        //                 <option value="sarah">Sarah</option>
        //                 <option value="eliza">Eliza</option>
        //                 <option value="lisa">Lisa</option>
        //                 <option value="liz">Liz</option>
        //                 <option value="tyler">Tyler</option>
        //             </select></p>
        //         );
        //     } else {
        //         console.log(this);
        //     }
        // }

        const returnActive = () => { // maybe add npm react-toggle-switch (https://www.npmjs.com/package/react-toggle-switch)
            return (
                <label>
                    Is Active  
                    <input 
                        name="active" 
                        type="checkbox" 
                        checked={!!this.props.companyInfo["active"]} 
                        onChange={this.props.handleChange} />
                </label>
            )
        }

        const returnDeliveryDay = () => {
            if (this.props.companyInfo["delivery_day"]) { // NEED TO FIGURE OUT WHY THIS IS NECESSARY TO AVOID 'UNDEFINED' ERROR
                return(
                    <p>Delivery Day: <select onChange={this.props.handleChange} name="delivery_day" value={this.props.companyInfo["delivery_day"].toLowerCase()} >
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                    </select></p>
                );
            }
        }

        const returnSpecialInstructions = () => {

            return (
                <div>Special Instructions: <br /><br /> 
                    <textarea onChange={this.props.handleChange} 
                    name="specialInstructions" 
                    value={handleBlank("special_instructions")}></textarea>
                </div>
            );
        }

        return (
            <React.Fragment>
                <h2>Account Details</h2>
                <form>
                    {returnActive()}
                    {returnCompanyInfo("company_name")}
                    {returnCompanyInfo("company_address")}
                    {returnCompanyInfo("company_city")}
                    {returnCompanyInfo("company_zip_code")}
                    {returnCompanyInfo("ctct_email_list")}
                    {returnCompanyInfo("scheduling_contact_name")}
                    {returnCompanyInfo("scheduling_contact_phone")}
                    {returnCompanyInfo("scheduling_contact_email")}
                    {returnCompanyInfo("hr_contact_name")}
                    {returnCompanyInfo("hr_contact_phone")}
                    {returnCompanyInfo("hr_contact_email")}
                    {returnDeliveryDay()}
                    {returnCompanyInfo("delivery_time")}
                    {returnSpecialInstructions()}
                <button onClick={this.props.handleSubmit}>Submit Changes</button>
                </form>
            </React.Fragment>
        );
    }
};

// Account.propTypes = {                        ????
//     type: PropTypes.string.isRequired        should implement this
// };

export default WorkplaceAccount;