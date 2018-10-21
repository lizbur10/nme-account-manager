import React from 'react';
import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';

class WorkplaceAccountListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        workplaceAccounts: []
      };
    }

    toggleSwitch = (id, active) => {
      this.setState({
        workplaceAccounts: this.state.workplaceAccounts.map(account => 
          (account.id === id ? Object.assign({}, account, { active }) : account))
      }, function () {
        this.persistUpdate(id);
      })
    }

    persistUpdate = (id) => {
      let accountIndex = this.state.workplaceAccounts.findIndex(function(account) {
        return account.id === id;
      })  
        fetch('/workplace_accounts/' + id, { 
          method: "PATCH",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.workplaceAccounts[accountIndex])
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