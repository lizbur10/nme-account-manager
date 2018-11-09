import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorkplaceAccount from '../../components/WorkplaceAccount/fullInfo';

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

    // -> REDUX
    // handleReassignManager = (event) => {
    //     const newManager = this.props.managers.filter(manager =>
    //         manager.name.toLowerCase() === event.target.value)[0];
    //     this.setState({
    //         workplace_account: {
    //             ...this.state.workplaceAccount,
    //             manager_id: newManager.id,
    //             manager: newManager
    //         }
    //     })
    // }

    // -> ASYNC
    handleSubmit = event => {
        event.preventDefault();
        fetch('/workplace_accounts', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.workplaceAccount)
        }).then(
            this.props.history.push('/workplace_accounts')
        )
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
                    companyInfo={this.state.workplaceAccount} 
                    managers={this.props.managers}
                    handleChange={this.handleChange} 
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

export default connect(mapStateToProps)(AddWorkplaceAccountContainer);