import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';

class AddWorkplaceAccountContainer extends Component {
    state = {
        workplace_account: [] 
    }

    handleChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            workplace_account: {
                ...this.state.workplace_account,
                [event.target.name]: value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch('/workplace_accounts', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(
            this.props.history.push('/workplace_accounts')
        )
    }

    render () {
        return (
            <React.Fragment>
                <h2>Add New Account</h2>
                <WorkplaceAccount 
                    companyInfo={this.state.workplace_account} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }


}

export default AddWorkplaceAccountContainer;