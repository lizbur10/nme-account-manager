import React, { Component } from 'react';

import WorkplaceAccountSummary from '../../components/WorkplaceAccount/summaryInfo';

class WorkplaceAccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workplaceAccounts: props.workplaceAccounts
    };
  }

  handleSort = (accountArray) => {
    const sortedArray = [...accountArray];
     sortedArray.sort(function(a, b){
       return b.counter - a.counter;
     })
     this.setState({
       ...this.state,
       workplaceAccounts: sortedArray
     })
  }


  render () {
      return (
        <div>
          <button onClick={() => this.handleSort(this.state.workplaceAccounts)}>Sort by Likes</button>
          <table>
            <tbody>
              <tr>
                <th>Active</th><th>Day</th><th>Manager</th><th>Company Name</th><th>City</th>
              </tr>
              { this.state.workplaceAccounts.map(account => 
                <WorkplaceAccountSummary 
                  key={(account.id ? account.id : "new_account")} 
                  workplaceAccount={account}
                  handleClick={this.props.handleClick}
                  toggleSwitch={this.props.toggleSwitch} />) }
            </tbody>
          </table>
        </div>
  
      )

    }

  }

  export default WorkplaceAccountList;