import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import WorkplaceAccountListContainer from './containers/ManageWorkplaceAccounts/ListViewContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <WorkplaceAccountListContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
