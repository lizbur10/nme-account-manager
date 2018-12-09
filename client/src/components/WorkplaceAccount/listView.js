import React, { Component } from 'react';

import WorkplaceAccountSummary from '../../components/WorkplaceAccount/summaryInfo';

class WorkplaceAccountList extends Component {
  state = {
    workplaceAccounts: [],
    sorted: false
  };

  handleSort = () => {
    const sortedArray = [...this.props.workplaceAccounts];
     sortedArray.sort(function(a, b){
       return b.counter - a.counter;
     })
     this.setState({
       ...this.state,
       workplaceAccounts: sortedArray,
       sorted: true
     })
  }


  render () {
    let arr = [];
    if (this.state.sorted) {
      arr = this.state.workplaceAccounts
    } else {
      arr = this.props.workplaceAccounts
    }
      return (
        <div>
          <button onClick={() => this.handleSort()}>Sort by Likes</button>
          <table>
            <tbody>
              <tr>
                <th>Active</th><th>Day</th><th>Manager</th><th>Company Name</th><th>City</th>
              </tr>
              { 
                arr.map(account => 
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