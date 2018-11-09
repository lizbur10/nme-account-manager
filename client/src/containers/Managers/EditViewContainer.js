import React, { Component } from 'react';
import { connect } from 'react-redux';
import Manager from '../../components/Manager/fullInfo';


class ManagerContainer extends Component {
    state = {
        manager: this.props.manager
    }

    // NO REDUX
    handleChange = event => {
        let value;
        let newMarket = null;
        if ( event.target.type === 'select-one' ) { // HANDLES DROP-DOWN TO SELECT MARKET
            value = this.props.markets.filter(market =>
                market.name.toLowerCase() === event.target.value)[0];
            newMarket = value.id;
        } else if (event.target.type === 'checkbox') { // HANDLES ACTIVE/INACTIVE TOGGLE 
            value = event.target.checked;
        } else {
            value = event.target.value;
        }
        if (newMarket) {
            this.setState({
                manager: {
                    ...this.state.manager,
                    market_id: newMarket,
                    [event.target.name]: value
                }
            })    

        } else {
            this.setState({
                manager: {
                    ...this.state.manager,
                    [event.target.name]: value
                }
            })    
        }
    }

    // -> ASYNC
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
                    markets={this.props.markets}
                    handleChange={this.handleChange}
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
    const manager = state.manager.managers.filter(m =>
        m.id === parseInt(ownProps.match.params.id, 10))[0]; // THE 10 IS TO FIX A 'NO RADIX PARAMETER' WARNING
    return {
        manager: manager,
        markets: state.market.markets
    };
};



export default connect(mapStateToProps)(ManagerContainer);