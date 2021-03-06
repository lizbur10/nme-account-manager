import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

//WORKPLACE ACCOUNT IMPORTS
import WorkplaceAccountListContainer from './containers/WorkplaceAccounts/ListWorkplaceAccountsContainer';
// import WorkplaceAccountContainer from './containers/WorkplaceAccounts/EditWorkplaceAccountContainer';
// import AddWorkplaceAccountContainer from './containers/WorkplaceAccounts/AddWorkplaceAccountContainer';
import WorkplaceAccountContainer from './containers/WorkplaceAccounts/ManageWorkplaceAccounts';

//MANAGER IMPORTS
import ManagerListContainer from './containers/Managers/ListManagersContainer';
// import ManagerContainer from './containers/Managers/EditManagerContainer';
// import AddManagerContainer from './containers/Managers/AddManagerContainer';
import ManagerContainer from './containers/Managers/ManageManagers';

class App extends Component {
  render () {
    return (
      <div className="app">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/workplace_accounts" >Workplace Wellness</NavLink></li>
              <li><NavLink className="inactive" to="/home_delivery_accounts" >Home Delivery</NavLink></li>
              <li><NavLink className="inactive" to="/catering_accounts" >Catering</NavLink></li>
              <li><NavLink className="inactive" to="/view_schedule" >View Schedule</NavLink></li>
              <li><NavLink to="/managers" >Admin</NavLink></li>
            </ul>
          </nav>
        </header> 
        <h1>9 Miles East Account Management</h1>
        <Switch>
          <Route exact path="/" component={WorkplaceAccountListContainer} />
          <Route exact path="/workplace_accounts" component={WorkplaceAccountListContainer} />
          {/* <Route exact path="/workplace_accounts/new" component={AddWorkplaceAccountContainer} />
          <Route exact path="/workplace_accounts/:id" component={WorkplaceAccountContainer} /> */}
          <Route exact path="/workplace_accounts/new" component={WorkplaceAccountContainer} />
          <Route exact path="/workplace_accounts/:id" component={WorkplaceAccountContainer} />

          <Route exact path="/managers" component={ManagerListContainer} />
          {/* <Route exact path="/managers/new" component={AddManagerContainer} />
          <Route exact path="/managers/:id" component={ManagerContainer} /> */}
          <Route exact path="/managers/new" component={ManagerContainer} />
          <Route exact path="/managers/:id" component={ManagerContainer} />

          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>

    );  
  }
}

export default App;
