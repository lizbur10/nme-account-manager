import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';

class WorkplaceAccountContainer extends Component {
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
        fetch('/workplace_accounts/1', { // NEED TO UN-DUMMY
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    render () {
        return (
            <React.Fragment>
                <WorkplaceAccount 
                    companyInfo={this.state.workplace_account} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch('/workplace_accounts/1') // NEED TO UN-DUMMY
          .then(response => response.json())
          .then(data => {
            this.setState({
                workplace_account: data
            })
          })
    }
}

export default WorkplaceAccountContainer;