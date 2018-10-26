import React, { Component } from 'react';
import Manager from '../../components/Manager/fullInfo';

class ManagerContainer extends Component {
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
        fetch('/managers/' + this.props.match.params.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.manager)
        }).then(response => {
            console.log(response)
          })
          .catch(error => console.log(error))
        this.props.history.push('/managers');

    }

    render () {
        return (
            <React.Fragment>
                <h2>Account Manager Details</h2>
                <Manager 
                    managerInfo={this.state.manager} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch('/managers/' + this.props.match.params.id) 
        .then(response => response.json())
        .then(data => {
          this.setState({
              manager: data
          })
        })
    }
}

export default ManagerContainer;