import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';

class WorkplaceAccountContainer extends Component {
    // state = {
    //     workplace_account: [],
    //     managers: []
    // }

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
        fetch('/workplace_accounts/' + this.props.match.params.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.workplace_account)
        }).then(response => {
            this.props.history.push('/workplace_accounts');
            console.log(response);
          })
          .catch(error => console.log(error))

    }

    render () {
        return (
            <React.Fragment>
                <h2>Account Details</h2>
                <WorkplaceAccount 
                    companyInfo={this.props.workplaceAccount} 
                    managers={this.props.managers}
                    handleChange={this.handleChange}
                    handleReassignManager={this.handleReassignManager} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

    // componentDidMount() {
    //     Promise.all([
    //         fetch('/workplace_accounts/' + this.props.match.params.id),
    //         fetch('/managers')
    //     ])
    //     .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    //     .then(([data1, data2]) => this.setState({
    //         workplace_account: data1, 
    //         managers: data2
    //     }));
    // }
}

const mapStateToProps = (state, ownProps) => {
    const account = state.workplaceAccounts.filter(acct =>
        acct.id === parseInt(ownProps.match.params.id, 10))[0]; // THE 10 IS TO FIX A 'NO RADIX PARAMETER' WARNING
    return {
      workplaceAccount: account,
      managers: state.managers
    };
};


export default connect(mapStateToProps)(WorkplaceAccountContainer);