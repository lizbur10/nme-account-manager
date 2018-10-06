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
                inputValue=undefined;
            }
            else {
                inputValue = this.props.companyInfo[companyInfoKey]
            }
            return(
                <p key={companyInfoKey} >{labelMaker(companyInfoKey)}: <input onChange={this.props.changeHandler} type="text" name={companyInfoKey} value={inputValue} /></p>
            );
        }

        // MAKE THE LIST OF MANAGERS DYNAMIC
        const returnAccountManager = () => {
            return (
                <p key="accountManager">Account Manager: <select onChange={this.props.changeHandler} name="accountManager" value={this.props.companyInfo["accountManager"].toLowerCase()} >
                    <option value="gordon">Gordon</option>
                    <option value="sarah">Sarah</option>
                    <option value="eliza">Eliza</option>
                    <option value="lisa">Lisa</option>
                    <option value="liz">Liz</option>
                </select></p>
            );
        }

        const returnDeliveryDay = () => {
            return(
                <p key="deliveryDay">Delivery Day: <select onChange={this.props.changeHandler} name="deliveryDay" value={this.props.companyInfo["deliveryDay"].toLowerCase()} >
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                </select></p>
            );
        }

        const returnSpecialInstructions = () => {
            return (
                <p key="specialInstructions">Special Instructions: <br /><br /> <textarea onChange={this.props.changeHandler} name="specialInstructions" value={this.props.companyInfo["specialInstructions"]}></textarea></p>
            );
        }

        const attributeList = Object.keys(this.props.companyInfo);
        return (
            <React.Fragment>
                <h1>Account Details</h1>
                <form>
                    {attributeList.map((attr) => {
                        if (attr === "accountManager") {
                            return returnAccountManager();
                        } else if (attr === "deliveryDay") {
                            return returnDeliveryDay();
                        } else if (attr === "specialInstructions") {
                            return returnSpecialInstructions();
                        } else {
                            return returnCompanyInfo(attr);
                        }
                    })}
                </form>
            </React.Fragment>
        );
    }
};

// Account.propTypes = {                        ????
//     type: PropTypes.string.isRequired        should implement this
// };

export default WorkplaceAccount;