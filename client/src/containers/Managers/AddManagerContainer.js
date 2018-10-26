import React, { Component } from 'react';
import Manager from '../../components/Manager/fullInfo';

class AddManagerContainer extends Component {
    state = {
        manager: [] 
    }

    handleChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            manager: {
                ...this.state.manager,
                [event.target.name]: value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch('/managers', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(
            this.props.history.push('/managers')
        )
    }

    render () {
        return (
            <React.Fragment>
                <h2>Add New Account Manager</h2>
                <Manager 
                    managerInfo={this.state.manager} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }


}

export default AddManagerContainer;