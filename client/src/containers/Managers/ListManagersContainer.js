import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ManagerList from '../../components/Manager/listView';
import * as managerActions from '../../actions/index';


class ManagerListContainer extends React.Component {
    separateMarkets = () => {
      const marketsArray = this.props.markets;
      const marketArray = [];
      if (this.props.managers) {
        for (let i=0; i < marketsArray.length; i++) {
          marketArray[i] = this.props.managers.filter(function (manager) {
            return manager.market.name.toLowerCase() === marketsArray[i].name.toLowerCase();
          })
        }
      }
      return marketArray;
    }
    returnMarket = (marketArray) => {
      if ( marketArray[0] ) {
        return marketArray[0].market.name.charAt(0).toUpperCase() + marketArray[0].market.name.slice(1)
            } else {
        return ' ';
      }
    } 

    toggleSwitch = (managerInfo, active) => {
      const updatedManager = Object.assign({}, managerInfo, { active });
      this.props.onSubmitUpdatedManager(updatedManager, false);
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.onFetchManagers();
      this.props.onFetchMarkets();
    }

    render() {
      return (
        <div>
          { this.separateMarkets().map( (market, i) =>
              <div key={i}>
                <h2>Account Managers: {this.returnMarket(market)}</h2>
                <ManagerList 
                  managers={market} 
                  toggleSwitch={this.toggleSwitch} />
              </div> 
            )}
            <Link className="add-new-button" to="/managers/new">Add New Account Manager</Link>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      managers: state.manager.managers,
      markets: state.market.markets
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        onSubmitUpdatedManager: (managerInfo, sendAlert) => dispatch( managerActions.persistUpdatedManager(managerInfo, sendAlert)),
        onFetchManagers: () => dispatch( managerActions.fetchManagers()),
        onFetchMarkets: () => dispatch( managerActions.fetchMarkets())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ManagerListContainer);
