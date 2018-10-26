import React, { Component } from 'react';
// import PropTypes from 'prop-types'; 

class Manager extends Component { //used class instead of const to enable prop-type validation
    render () {

        const labelMaker = (varName) => {
            return varName
                .replace(/_/g, " ")
                // .replace("ctct", "CTCT")
                // .replace(/hr/, "HR")
                .split(/\s/)
                .map((word) => 
                    word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
        }

        const handleBlank = (fieldName) => {
            if (this.props.managerInfo[fieldName] == null) {
                return " ";
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


        return (
            <form>
                {returnActive()}
                {returnManagerInfo("name")}
                {returnManagerInfo("contact_info")}
                {returnManagerInfo("username")}
            <button onClick={this.props.handleSubmit}>Submit</button>
            </form>
        );
    }
};

// Account.propTypes = {                        ????
//     type: PropTypes.string.isRequired        should implement this
// };

export default Manager;