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

    createFields = () => {
        let fields = [];
        return fields
            .concat(this.returnActive())
            .concat(this.returnMarketSelect())
            .concat(this.returnManagerInfo("name"))
            .concat(this.returnManagerInfo("email"))
            .concat(this.returnManagerInfo("phone"));
    }

    returnActive = () => { 
        return (
            <label key="active">
                Manager Active:
                <label className="switch">
                    <input 
                        name="active"
                        type="checkbox" 
                        checked={!!this.state.manager["active"]} 
                        onChange={this.handleChange} />
                    <span className="slider"></span>
                </label>
            </label>
        )
    }

    returnMarketSelect = () => {
        let value;
        this.state.manager["market"] ? value=this.state.manager["market"]["name"].toLowerCase() : value = "select_market";
        return (
            <p key="market_select">Market:
                <select onChange={this.handleChange} 
                    name="market" 
                    value={value} >
                        <option value="select_market">Select Market</option>
                        <option value="albany">Albany</option>
                        <option value="boston">Boston</option>                            
               </select>
            </p>
        )
    }

    labelMaker = (varName) => {
        return varName
            .replace(/_/g, " ")
            .split(/\s/)
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(' ');
    }

    handleBlank = (fieldName) => {
        if (this.state.manager[fieldName] == null) {
            return "";
        } else {
            return this.state.manager[fieldName];
        }
    }

    returnManagerInfo = (managerInfoKey) => {
        return(
            <p key={managerInfoKey}>{this.labelMaker(managerInfoKey)}: <input onChange={this.handleChange} type="text" name={managerInfoKey} value={this.handleBlank(managerInfoKey)} /></p>
        );
    }

    // LOCAL STATE
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
                    // managerInfo={this.state.manager} 
                    createFields={this.createFields}
                    // handleChange={this.handleChange} 
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