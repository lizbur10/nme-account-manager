import React, { Component } from 'react';
// import PropTypes from 'prop-types'; 

class WorkplaceAccount extends Component { //used class instead of const to enable prop-type validation
    render () {

        const labelMaker = (varName) => {
            return varName.split(/(?=[A-Z])/).map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
        }

        const returnCompanyInfo = (companyInfoKey) => {
            let inputValue;

            if (this.props.companyInfo[companyInfoKey] == null) {
                inputValue=' ';
            } else {
                inputValue = this.props.companyInfo[companyInfoKey]
            }
            return(
                <p key={companyInfoKey} >{labelMaker(companyInfoKey)}: <input onChange={this.props.handleChange} type="text" name={companyInfoKey} value={inputValue} /></p>
            );
        }

        // MAKE THE LIST OF MANAGERS DYNAMIC
        const returnAccountManager = () => {
            
            if (this.props.companyInfo["manager"]) { // NEED TO FIGURE OUT WHY THIS IS NECESSARY TO AVOID 'UNDEFINED' ERROR
                return (
                    <p key="accountManager">Account Manager: <select onChange={this.props.handleChange} name="accountManager" value={this.props.companyInfo["manager"]["name"].toLowerCase()} >
                        <option value="gordon">Gordon</option>
                        <option value="sarah">Sarah</option>
                        <option value="eliza">Eliza</option>
                        <option value="lisa">Lisa</option>
                        <option value="liz">Liz</option>
                        <option value="tyler">Tyler</option>
                    </select></p>
                );
            } else {
                console.log(this);
            }
        }

        const returnActive = () => { // maybe add npm react-toggle-switch (https://www.npmjs.com/package/react-toggle-switch)
            return (
                <label key="isActive">
                    Is Active  
                    <input 
                        name="active" 
                        type="checkbox" 
                        checked={this.props.companyInfo["active"]} 
                        onChange={this.props.handleChange} />
                </label>
            )
        }

        const returnDeliveryDay = () => {
            return(
                <p key="deliveryDay">Delivery Day: <select onChange={this.props.handleChange} name="deliveryDay" value={this.props.companyInfo["delivery_day"].toLowerCase()} >
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                </select></p>
            );
        }

        const returnSpecialInstructions = () => {
            return (
                <div key="specialInstructions">Special Instructions: <br /><br /> <textarea onChange={this.props.handleChange} name="specialInstructions" value={this.props.companyInfo["special_instructions"]}></textarea></div>
            );
        }

        const attributeList = Object.keys(this.props.companyInfo);
        return (
            <React.Fragment>
                <h1>Account Details</h1>
                <form>
                    {attributeList.map((attr) => {
                        if (attr === "manager") {
                            return returnAccountManager();
                        } else if (attr === "active") {
                            return returnActive();
                        } else if (attr === "delivery_day") {
                            return returnDeliveryDay();
                        } else if (attr === "special_instructions") {
                            return returnSpecialInstructions();
                        } else {
                            return returnCompanyInfo(attr);
                        }
                    })}
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