import React, { Component } from 'react';
import Manager from '../../components/Manager/fullInfo';

class AddManagerContainer extends Component {
    state = {
        manager: [],
        markets: [] 
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

    handleReassignMarket = (event) => {
        const newMarket = this.state.markets.filter(market =>
            market.name.toLowerCase() === event.target.value)[0];
        this.setState({
            manager: {
                ...this.state.manager,
                market_id: newMarket.id,
                market: newMarket
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

    componentDidMount() {
        fetch('/markets') 
        .then(response => response.json())
        .then(data => {
          this.setState({
              markets: data
          })
        })
      }
  

    render () {
        return (
            <React.Fragment>
                <h2>Add New Account Manager</h2>
                <Manager 
                    managerInfo={this.state.manager} 
                    handleChange={this.handleChange} 
                    handleReassignMarket={this.handleReassignMarket}
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }


}

export default AddManagerContainer;