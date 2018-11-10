import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';
import * as workplaceAccountActions from '../../actions/index';

class AddWorkplaceAccountContainer extends Component {
    state = {
        workplaceAccount: {
            active: true
        }
    }

    // NO REDUX
    handleChange = event => {
        let value;
        let newManager = null;
        if ( event.target.type === 'select-one' && event.target.name === 'manager') { // HANDLES DROP-DOWN TO SELECT MANAGER
            value = this.props.managers.filter(manager =>
                manager.name.toLowerCase() === event.target.value)[0];
            newManager = value.id;
        } else if (event.target.type === 'checkbox') { // HANDLES ACTIVE/INACTIVE TOGGLE 
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        if (newManager) { 
            this.setState({
                workplaceAccount: {
                    ...this.state.workplaceAccount,
                    manager_id: newManager,
                    [event.target.name]: value
                }
            })
        } else {
            this.setState({
                workplaceAccount: {
                    ...this.state.workplaceAccount,
                    [event.target.name]: value
                }
            })    
        }
    }

    createFields = () => {
        const fields = [];
        return fields
            .concat(this.returnActive())
            .concat(this.returnManagerSelect())
            .concat(this.returnCompanyInfo("company_name"))
            .concat(this.returnCompanyInfo("company_address"))
            .concat(this.returnCompanyInfo("company_city"))
            .concat(this.returnCompanyInfo("company_zip_code"))
            .concat(this.returnCompanyInfo("ctct_email_list"))
            .concat(this.returnCompanyInfo("scheduling_contact_name"))
            .concat(this.returnCompanyInfo("scheduling_contact_phone"))
            .concat(this.returnCompanyInfo("scheduling_contact_email"))
            .concat(this.returnCompanyInfo("hr_contact_name"))
            .concat(this.returnCompanyInfo("hr_contact_phone"))
            .concat(this.returnCompanyInfo("hr_contact_email"))
            .concat(this.returnDeliveryDay())
            .concat(this.returnCompanyInfo("delivery_time"))
            .concat(this.returnSpecialInstructions())
    }

    returnActive = () => { 
        return (
            <label key="active">
                Account Active:
                <label className="switch">
                    <input 
                        name="active"
                        type="checkbox" 
                        checked={!!this.state.workplaceAccount["active"]} 
                        onChange={this.handleChange} />
                    <span className="slider"></span>
                </label>
            </label>
        )
    }

    createManagerList = () => {
        let options=[];
        if (this.props.managers) {
            this.props.managers.map( manager =>
                options.push(<option key={manager.id} value={manager.name.toLowerCase()}>{manager.name.charAt(0).toUpperCase() + manager.name.slice(1)}</option>)
              )
              return options;
        }
    }

    returnManagerSelect = () => {
        let value;
        this.state.workplaceAccount["manager"] ? value=this.state.workplaceAccount["manager"]["name"].toLowerCase() : value = "select_manager";
        return(
            <p key="manager_select">Account Manager: 
                <select onChange={this.handleChange} 
                    name="manager" 
                    value={value} >
                        <option value="select_manager">Select Manager</option>
                        {this.createManagerList()}
       </select></p>
        )
    }

    labelMaker = (varName) => {
        return varName
            .replace(/_/g, " ")
            .replace("ctct", "CTCT")
            .replace(/hr/, "HR")
            .split(/\s/)
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(' ');
    }

    handleBlank = (fieldName) => {
        if (this.state.workplaceAccount[fieldName] == null) {
            return "";
        } else {
            return this.state.workplaceAccount[fieldName];
        }
    }

    returnCompanyInfo = (companyInfoKey) => {
        return(
            <p key={companyInfoKey}>{this.labelMaker(companyInfoKey)}: <input onChange={this.handleChange} type="text" name={companyInfoKey} value={this.handleBlank(companyInfoKey)} /></p>
        );
    }

    returnDeliveryDay = () => {
        let value;
        this.state.workplaceAccount["delivery_day"] ? value=this.state.workplaceAccount["delivery_day"].toLowerCase() : value="select_day"
        return(
                <p key="delivery_day">Delivery Day: 
                    <select onChange={this.handleChange} 
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

    returnSpecialInstructions = () => {
        return (
            <div key="special_instructions">Special Instructions: <br /><br /> 
                <textarea onChange={this.handleChange} 
                name="special_instructions" 
                value={this.handleBlank("special_instructions")}></textarea>
            </div>
        );
    }

    // -> ASYNC
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmitWorkplaceAccount(this.state.workplaceAccount);
        this.props.history.push('/workplace_accounts');
        // fetch('/workplace_accounts', { 
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.workplaceAccount)
        // }).then(response => {
        //     this.props.history.push('/workplace_accounts');
        //     console.log(response);
        // })
        //   .catch(error => console.log(error))
    }

    // componentDidMount() {
    //     fetch('/managers') 
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //           managers: data
    //       })
    //     })
    // }
  
    render () {
        return (
            <React.Fragment>
                <h2>Add New Account</h2>
                <WorkplaceAccount 
                    // companyInfo={this.state.workplaceAccount} 
                    createFields={this.createFields}
                    managers={this.props.managers}
                    // handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => {
    return {
      managers: state.manager.managers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitWorkplaceAccount: (accountInfo) => dispatch( workplaceAccountActions.persistNewWorkplaceAccount(accountInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkplaceAccountContainer);