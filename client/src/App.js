import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

//WORKPLACE ACCOUNT IMPORTS
import WorkplaceAccountListContainer from './containers/WorkplaceAccounts/ListViewContainer';
import WorkplaceAccountContainer from './containers/WorkplaceAccounts/EditViewContainer';
import AddWorkplaceAccountContainer from './containers/WorkplaceAccounts/AddAccountContainer';

//MANAGER IMPORTS
import ManagerListContainer from './containers/Managers/ListViewContainer';
import ManagerContainer from './containers/Managers/EditViewContainer';
// import AddManagerContainer from './containers/Managers/AddManagerContainer';

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
              <li><NavLink to="/managers" exact>Account Managers</NavLink></li>
            </ul>
          </nav>
        </header>
        <h1>9 Miles East Account Management</h1>
        <Switch>
          <Route exact path="/" component={WorkplaceAccountListContainer} />
          <Route exact path="/workplace_accounts" component={WorkplaceAccountListContainer} />
          <Route exact path="/workplace_accounts/new" component={AddWorkplaceAccountContainer} />
          <Route exact path="/workplace_accounts/:id" component={WorkplaceAccountContainer} />
          <Route exact path="/managers" component={ManagerListContainer} />
          <Route exact path="/managers/:id" component={ManagerContainer} />

          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>

    );  
  }
}

export default App;
