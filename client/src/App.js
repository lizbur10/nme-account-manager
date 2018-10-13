import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import WorkplaceAccountListContainer from './containers/WorkplaceAccounts/ListViewContainer';
import WorkplaceAccount from './components/WorkplaceAccount/fullInfo';

class App extends Component {
  render () {
    return (
      <div>
        <h1>9 Miles East Account Management</h1>
        <Route exact path="/workplace_accounts/:id" component={WorkplaceAccount} />
        <Route exact path="/" component={WorkplaceAccountListContainer} />
        <Route exact path="/workplace_accounts" component={WorkplaceAccountListContainer} />
      </div>

    );  
  }
}

export default App;
