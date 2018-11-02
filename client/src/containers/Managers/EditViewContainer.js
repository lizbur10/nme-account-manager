import React, { Component } from 'react';
import { connect } from 'react-redux';
import Manager from '../../components/Manager/fullInfo';

// NOTE: MARKET IS BROKEN RIGHT NOW - NEED TO SWITCH FROM COMPONENTDIDMOUNT FETCH ACTION 
// TO REDUX 


class ManagerContainer extends Component {
    // state = {
    //     manager: [],
    //     markets: []
    // }

    // NO REDUX
    handleChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            manager: {
                ...this.state.manager,
                [event.target.name]: value
            }
        })
    }

    // REDUX
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

    // ASYNC
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
                    managerInfo={this.props.manager} 
                    handleChange={this.handleChange}
                    handleReassignMarket={this.handleReassignMarket}
                    handleSubmit={this.handleSubmit} /> 
            </React.Fragment>
        );
    }

//     componentDidMount() {
//         Promise.all([
//             fetch('/managers/' + this.props.match.params.id),
//             fetch('/markets')
//         ])
//         .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
//         .then(([data1, data2]) => this.setState({
//             manager: data1, 
//             markets: data2
//         }));
//     }
}

const mapStateToProps = (state, ownProps) => {
    const manager = state.managers.filter(m =>
        m.id === parseInt(ownProps.match.params.id, 10))[0]; // THE 10 IS TO FIX A 'NO RADIX PARAMETER' WARNING
    return {
      manager: manager
    };
};


export default connect(mapStateToProps)(ManagerContainer);