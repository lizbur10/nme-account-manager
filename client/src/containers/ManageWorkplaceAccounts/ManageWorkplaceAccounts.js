import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/WorkplaceAccount';

class WorkplaceAccountContainer extends Component {
    state = {
        companyInfo: {
            accountManager: 'Sarah',
            companyName: 'ACME Corp',
            companyAddress: '123 Main St',
            companyCity: 'Cambridge',
            constantContactEmailList: 'ACME Corp',
            contactName: 'Joe',
            contactEmail: 'joe@acmecorp.com',
            contactPhone: '555-1000',
            deliveryDay: 'Tuesday',
            deliveryTime: '9:00-9:20',
            specialInstructions: 'Bring an anvil and some TNT'
        }
    }

    changeHandler = (event) => {
        this.setState({
            companyInfo: {
                ...this.state.companyInfo,
                [event.target.name]: event.target.value
            }
        })
      }


    render () {
        return (
            <React.Fragment>
                <WorkplaceAccount companyInfo={this.state.companyInfo} changeHandler={this.changeHandler} /> 
            </React.Fragment>
        );
    }
}

export default WorkplaceAccountContainer;