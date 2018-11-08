import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';


class WorkplaceAccountContainer extends Component {
    state = {
        workplaceAccount: this.props.workplaceAccount
    }

    // NO REDUX
    handleChange = event => {
        let value;
        console.log(event.target);
        if ( event.target.type === 'select-one' && event.target.name === 'manager') { // HANDLES DROP-DOWN TO SELECT MANAGER
            value = this.props.managers.filter(manager =>
                manager.name.toLowerCase() === event.target.value)[0];
        } else if (event.target.type === 'checkbox') { // HANDLES ACTIVE/INACTIVE TOGGLE 
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        this.setState({
            workplaceAccount: {
                ...this.state.workplaceAccount,
                [event.target.name]: value
            }
        })

    }

    // ASYNC
    handleSubmit = event => {
        event.preventDefault();
        fetch('/workplace_accounts/' + this.props.match.params.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.workplaceAccount)
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
                    companyInfo={this.state.workplaceAccount} 
                    managers={this.props.managers}
                    handleChange={this.handleChange}
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
    //     }
}

const mapStateToProps = (state, ownProps) => {
    const account = state.workplaceAccount.workplaceAccounts.filter(acct =>
        acct.id === parseInt(ownProps.match.params.id, 10))[0]; // THE 10 IS TO FIX A 'NO RADIX PARAMETER' WARNING
    return {
      workplaceAccount: account,
      managers: state.manager.managers
    };
};

export default connect(mapStateToProps)(WorkplaceAccountContainer);