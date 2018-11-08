import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ManagerList from '../../components/Manager/listView';
import * as managerActions from '../../actions/index';

class ManagerListContainer extends React.Component {
    // constructor() {
    //   super()
   
    //   this.state = {
    //     managers: []
    //   };
    // }

    // -> REDUX -- DONE
    // toggleSwitch = (id, active) => {
    //   this.setState({
    //     managers: this.props.managers.map(manager => 
    //       (manager.id === id ? Object.assign({}, manager, { active }) : manager))
    //   }, function () {
    //     this.persistUpdate(id);
    //   })
    // }

    // -> ASYNC
    persistUpdate = (id) => {
      let managerIndex = this.props.managers.findIndex(function(manager) {
        return manager.id === id;
      })
      fetch('/managers/' + id, { 
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.props.managers[managerIndex])
      })
    }

    // -> REDUX FOR GETTING MARKETS ONLY -- DONE
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

    // NO REDUX - PAGE DISPLAY ONLY
    returnMarket = (marketArray) => {
      if ( marketArray[0] ) {
        return marketArray[0].market.name.charAt(0).toUpperCase() + marketArray[0].market.name.slice(1)
            } else {
        return ' ';
      }
    } 

    componentDidMount() {
      this.props.onFetchManagers();
    //   fetch('/managers') 
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //         managers: data
    //     })
    //   })
    }

    render() {
      return (
        <div>
          { this.separateMarkets().map( (market, i) =>
              <div key={i}>
                <h2>Account Managers: {this.returnMarket(market)}</h2>
                <ManagerList 
                  managers={market} 
                  toggleSwitch={this.props.onToggleSwitch} />
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
      markets: state.market
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        onToggleSwitch: (id, active) => dispatch(managerActions.toggleSwitch(id, active)),
        onFetchManagers: () => dispatch( managerActions.fetchManagers())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ManagerListContainer);
