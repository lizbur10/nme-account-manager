import React from 'react';
import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';

class WorkplaceAccountListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        workplaceAccounts: []
      };
    }

    toggleSwitch = event => {
      // NEED TO SWITCH THIS TO A FETCH REQUEST (USING THE WORKPLACE ID) THEN UPDATE THE STATE
      this.setState({
          workplace_accounts: {
              ...this.state.workplace_accounts,
              active: !event.target.checked
          }
      })
  }

    componentDidMount() {
      fetch('/workplace_accounts')
        .then(response => response.json())
        .then(workplaceAccounts => this.setState({ workplaceAccounts }))
  }

    render() {
      return <WorkplaceAccountList workplaceAccounts={this.state.workplaceAccounts} toggleSwitch={this.toggleSwitch} />
    }
  }

  export default WorkplaceAccountListContainer;