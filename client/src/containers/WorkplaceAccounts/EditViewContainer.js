import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';

class WorkplaceAccountContainer extends Component {
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

    handleSubmit = event => {
        event.preventDefault();
        fetch('/workplace_accounts/' + this.props.match.params.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        alert('Account successfully updated');
        this.props.history.push('/workplace_accounts');

    }

    render () {
        return (
            <React.Fragment>
                <h2>Account Details</h2>
                <WorkplaceAccount 
                    companyInfo={this.state.workplace_account} 
                    managers={this.state.managers}
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        Promise.all([
            fetch('/workplace_accounts/' + this.props.match.params.id),
            fetch('/managers')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            workplace_account: data1, 
            managers: data2
        }));
    }
}

export default WorkplaceAccountContainer;