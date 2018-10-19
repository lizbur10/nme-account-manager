import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import WorkplaceAccountListContainer from './containers/WorkplaceAccounts/ListViewContainer';
import WorkplaceAccountContainer from './containers/WorkplaceAccounts/EditViewContainer';

class App extends Component {
  render () {
    return (
      <div className="app">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/workplace_accounts" >Workplace Wellness</NavLink></li>
              <li><NavLink to="/home_delivery_accounts" exact>Home Delivery</NavLink></li>
              <li><NavLink to="/catering_accounts" exact>Catering</NavLink></li>
              <li><NavLink to="/admin" exact>Admin</NavLink></li>
            </ul>
          </nav>
        </header>
        <h1>9 Miles East Account Management</h1>
        <Switch>
          <Route exact path="/" component={WorkplaceAccountListContainer} />
          <Route exact path="/workplace_accounts" component={WorkplaceAccountListContainer} />
          <Route exact path="/workplace_accounts/:id" component={WorkplaceAccountContainer} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>

    );  
  }
}

export default App;
