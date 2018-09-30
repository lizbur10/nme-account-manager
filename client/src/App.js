import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import ManageWorkplaceAccounts from './containers/ManageWorkplaceAccounts/ManageWorkplaceAccounts';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ManageWorkplaceAccounts />
        </Layout>
      </div>
    );
  }
}

export default App;
