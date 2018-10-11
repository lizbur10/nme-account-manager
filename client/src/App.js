import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import WorkplaceAccountContainer from './containers/ManageWorkplaceAccounts/EditViewContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WorkplaceAccountContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
