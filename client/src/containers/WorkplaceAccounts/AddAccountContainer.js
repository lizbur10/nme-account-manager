import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';

class AddWorkplaceAccountContainer extends Component {
    state = {
        workplace_account: [],
        managers: []
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

    handleReassignManager = (event) => {
        const newManager = this.state.managers.filter(manager =>
            manager.name.toLowerCase() === event.target.value)[0];
        this.setState({
            workplace_account: {
                ...this.state.workplace_account,
                manager_id: newManager.id,
                manager: newManager
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

    componentDidMount() {
        fetch('/managers') 
        .then(response => response.json())
        .then(data => {
          this.setState({
              managers: data
          })
        })
    }
  
    render () {
        return (
            <React.Fragment>
                <h2>Add New Account</h2>
                <WorkplaceAccount 
                    companyInfo={this.state.workplace_account} 
                    managers={this.state.managers}
                    handleChange={this.handleChange} 
                    handleReassignManager={this.handleReassignManager}
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }


}

export default AddWorkplaceAccountContainer;