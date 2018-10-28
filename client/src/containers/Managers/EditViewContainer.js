import React, { Component } from 'react';
import Manager from '../../components/Manager/fullInfo';

class ManagerContainer extends Component {
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
        fetch('/managers/' + this.props.match.params.id, { 
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.manager)
        }).then(response => {
            this.props.history.push('/managers');
            console.log(response);
          })
          .catch(error => console.log(error))

    }

    render () {
        return (
            <React.Fragment>
                <h2>Account Manager Details</h2>
                <Manager 
                    managerInfo={this.state.manager} 
                    handleChange={this.handleChange}
                    handleReassignMarket={this.handleReassignMarket}
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        Promise.all([
            fetch('/managers/' + this.props.match.params.id),
            fetch('/markets')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            manager: data1, 
            markets: data2
        }));
    }
}

export default ManagerContainer;