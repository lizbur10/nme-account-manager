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

        const returnActive = () => { 
            return (
                <label>
                    Account Active:
                    <label className="switch">
                        <input 
                            name="active"
                            type="checkbox" 
                            checked={!!this.props.companyInfo["active"]} 
                            onChange={this.props.handleChange} />
                        <span className="slider"></span>
                    </label>
                </label>
            )
        }

        const createManagerList = () => {
            let options=[];
            this.props.managers.map(manager =>
              options.push(<option value={manager.name.toLowerCase()}>{manager.name.charAt(0).toUpperCase() + manager.name.slice(1)}</option>)
            )
            return options;
    
        }

        const returnManagerSelect = () => {
            let value;
            if (this.props.companyInfo["manager"]) { // NEED TO FIGURE OUT WHY THIS IS NECESSARY TO AVOID 'UNDEFINED' ERROR
                value=this.props.companyInfo["manager"]["name"].toLowerCase();
            } else {
                value="select_manager"
            }
            return(
                <p>Account Manager: 
                    <select onChange={this.props.handleChange} 
                        name="manager" 
                        value={value} >
                            <option value="select_manager">Select Manager</option>
                            {createManagerList()}
           </select></p>
            )
        }

        const returnDeliveryDay = () => {
            let value;
            if (this.props.companyInfo["delivery_day"]) { // NEED TO FIGURE OUT WHY THIS IS NECESSARY TO AVOID 'UNDEFINED' ERROR
                value=this.props.companyInfo["delivery_day"].toLowerCase();
            } else {
                value="select_day"
            }
            return(
                    <p>Delivery Day: 
                        <select onChange={this.props.handleChange} 
                            name="delivery_day" 
                            value={value} >
                                <option value="select_day">Select Day</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                        </select>
                    </p>
                );
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
            <form>
                {returnActive()}
                {returnManagerSelect()}
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
            <button onClick={this.props.handleSubmit}>Submit</button>
            </form>
        );
    }
};

// Account.propTypes = {                        ????
//     type: PropTypes.string.isRequired        should implement this
// };

export default WorkplaceAccount;