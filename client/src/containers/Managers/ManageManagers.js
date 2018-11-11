import React, { Component } from 'react';
import { connect } from 'react-redux';
import Manager from '../../components/Manager/fullInfo';
import * as managerActions from '../../actions/index';


class ManagerContainer extends Component {
    state = {
        manager: this.props.manager
    }

    createFields = () => {
        const fields = [];
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

    handleSubmit = () => {
        if (this.state.manager.id) {
            this.props.onSubmitUpdatedManager(this.state.manager);
        } else {
            this.props.onSubmitManager(this.state.manager);
        }
        this.props.history.push('/managers');
    }

    handleCancel = () => {
        this.props.history.push('/managers');
    }

    render () {
        return (
            <React.Fragment>
                <h2>Account Manager Details</h2>
                <Manager
                    createFields={this.createFields}
                    handleSubmit={this.handleSubmit} 
                    handleCancel={this.handleCancel}/> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.onFetchManagers();
        this.props.onFetchMarkets();
    }
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.match.params.id) { // HANDLES EDIT/UPDATE CASE
        const manager = state.manager.managers.filter(m =>
            m.id === parseInt(ownProps.match.params.id, 10))[0]; // THE 10 IS TO FIX A 'NO RADIX PARAMETER' WARNING
        return {
            manager: manager,
            markets: state.market.markets
        };
    } else { // HANDLES NEW CASE
        return {
            manager: {active: true},
            markets: state.market.markets
        };
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitManager: (managerInfo) => dispatch( managerActions.persistNewManager(managerInfo)),
        onSubmitUpdatedManager: (managerInfo) => dispatch( managerActions.persistUpdatedManager(managerInfo)),
        onFetchWorkplaceAccounts: () => dispatch( managerActions.fetchWorkplaceAccounts()),
        onFetchManagers: () => dispatch( managerActions.fetchManagers()),
        onFetchMarkets: () => dispatch( managerActions.fetchMarkets())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ManagerContainer);