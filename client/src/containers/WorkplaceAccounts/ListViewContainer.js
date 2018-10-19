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
      console.log(this.props);
      fetch('/workplace_accounts')
        .then(response => response.json())
        .then(workplaceAccounts => this.setState({ workplaceAccounts }))
  }

    handleClick = event => {
      event.preventDefault();
      console.log(event);
      const url='workplace_accounts/' + event.target.value;
      window.location.assign(url); 
  }

    render() {
      return <WorkplaceAccountList workplaceAccounts={this.state.workplaceAccounts} handleClick={this.handleClick}/>
    }
  }

  export default WorkplaceAccountListContainer;