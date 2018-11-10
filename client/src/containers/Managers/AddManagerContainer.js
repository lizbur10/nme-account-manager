import React, { Component } from 'react';
import { connect } from 'react-redux';
import Manager from '../../components/Manager/fullInfo';
import * as managerActions from '../../actions/index';


class AddManagerContainer extends Component {
    state = {
        manager: {
            active: true
        }
    }

    // NO REDUX
    handleChange = event => {
        // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // this.setState({
        //     manager: {
        //         ...this.state.manager,
        //         [event.target.name]: value
        //     }
        // })
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

    // -> REDUX
    // handleReassignMarket = (event) => {
    //     const newMarket = this.props.markets.filter(market =>
    //         market.name.toLowerCase() === event.target.value)[0];
    //     this.setState({
    //         manager: {
    //             ...this.state.manager,
    //             market_id: newMarket.id,
    //             market: newMarket
    //         }
    //     })
    // }

    // -> ASYNC
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmitManager(this.state.manager);
        this.props.history.push('/managers');

        // event.preventDefault();
        // fetch('/managers', { 
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.manager)
        // }).then(response => {
        //     this.props.history.push('/managers');
        //     console.log(response);
        // })
        //   .catch(error => console.log(error))
    }

    // componentDidMount() {
    //     fetch('/markets') 
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //           markets: data
    //       })
    //     })
    //   }
  

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

const mapStateToProps = state => {
    return {
      markets: state.market.markets
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        onSubmitManager: (managerInfo) => dispatch( managerActions.persistNewManager(managerInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddManagerContainer);