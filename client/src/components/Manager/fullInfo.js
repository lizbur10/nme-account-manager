import React, { Component } from 'react';
// import PropTypes from 'prop-types'; 

class Manager extends Component { //used class instead of const to enable prop-type validation
    render () {

        const labelMaker = (varName) => {
            return varName
                .replace(/_/g, " ")
                .split(/\s/)
                .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                .join(' ');
        }

        const handleBlank = (fieldName) => {
            if (this.props.managerInfo[fieldName] == null) {
                return "";
            } else {
                return this.props.managerInfo[fieldName];
            }
        }

        const returnManagerInfo = (managerInfoKey) => {
            return(
                <p>{labelMaker(managerInfoKey)}: <input onChange={this.props.handleChange} type="text" name={managerInfoKey} value={handleBlank(managerInfoKey)} /></p>
            );
        }

        const returnActive = () => { 
            return (
                <label>
                    Manager Active:
                    <label className="switch">
                        <input 
                            name="active"
                            type="checkbox" 
                            checked={!!this.props.managerInfo["active"]} 
                            onChange={this.props.handleChange} />
                        <span className="slider"></span>
                    </label>
                </label>
            )
        }

        const returnMarketSelect = () => {
            let value;
            this.props.managerInfo["market"] ? value=this.props.managerInfo["market"]["name"].toLowerCase() : value = "select_market";
            return (
                <p>Market:
                    <select onChange={this.props.handleChange} 
                        name="market" 
                        value={value} >
                            <option value="select_market">Select Market</option>
                            <option value="albany">Albany</option>
                            <option value="boston">Boston</option>                            
                   </select>
                </p>
            )
        }


        return (
            <form>
                {returnActive()}
                {returnMarketSelect()}
                {returnManagerInfo("name")}
                {returnManagerInfo("email")}
                {returnManagerInfo("phone")}
            <button onClick={this.props.handleSubmit}>Submit</button>
            </form>
        );
    }
};

// Account.propTypes = {                        ????
//     type: PropTypes.string.isRequired        should implement this
// };

export default Manager;