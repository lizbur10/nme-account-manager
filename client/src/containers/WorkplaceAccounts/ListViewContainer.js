import React from 'react';
import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';

class WorkplaceAccountListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        workplaceAccounts: []
      };
    }

    componentDidMount() {
      fetch('/workplace_accounts')
        .then(response => response.json())
        .then(workplaceAccounts => this.setState({ workplaceAccounts }))
  }

    render() {
      return <WorkplaceAccountList workplaceAccounts={this.state.workplaceAccounts} />
    }
  }

  export default WorkplaceAccountListContainer;