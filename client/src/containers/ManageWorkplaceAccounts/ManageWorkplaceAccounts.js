import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/WorkplaceAccount';

class WorkplaceAccountContainer extends Component {
    state = {
        companyInfo: [] 
    }

    handleChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            companyInfo: {
                ...this.state.companyInfo,
                [event.target.name]: value
            }
        })
    }

    handleSubmit = event => {
        console.log(JSON.stringify(this.state));
        event.preventDefault();
        fetch('/workplace_accounts/1', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    render () {
        console.log(JSON.stringify(this.state));
        return (
            <React.Fragment>
                <WorkplaceAccount 
                    companyInfo={this.state.companyInfo} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch('/workplace_accounts/1')
          .then(response => response.json())
          .then(data => {
            this.setState({
                companyInfo: data
                // companyInfo: {
                //     accountManager: data["manager"],
                //     active: data["active"],
                //     companyName: data["company_name"],
                //     companyAddress: data["company_address"],
                //     companyCity: data["company_city"],
                //     componyZipCode: data["company_zip_code"],
                //     constantContactEmailList: data["ctct_email_list"],
                //     schedulingContactName: data["scheduling_contact_name"],
                //     schedulingContactEmail: data["scheduling_contact_email"],
                //     schedulingContactPhone: data["scheduling_contact_phone"],
                //     hrContactName: data["hr_contact_name"],
                //     hrContactEmail: data["hr_contact_email"],
                //     hrContactPhone: data["hr_contact_phone"],
                //     deliveryDay: data["delivery_day"],
                //     deliveryTime: data["delivery_time"],
                //     specialInstructions: data["special_instructions"]
                // }
            })
          })
    }
}

export default WorkplaceAccountContainer;