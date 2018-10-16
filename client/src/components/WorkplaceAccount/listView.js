import React, { Component } from 'react';
import WorkplaceAccountSummary from '../../components/WorkplaceAccount/summaryInfo';

class WorkplaceAccountList extends Component {
  render () {
    return (
      <div>
        <h2>Workplace Accounts:</h2>
          <table>
            <tbody>
              <tr>
                <th>Day</th><th>Manager</th><th>Company Name</th><th>City</th>
              </tr>
              { this.props.workplaceAccounts.map(workplaceAccount => 
              <WorkplaceAccountSummary 
                key={workplaceAccount.id} 
                id={workplaceAccount.id}
                delivery_day={workplaceAccount.delivery_day}
                manager={workplaceAccount.manager["name"]}
                company_name={workplaceAccount.company_name} 
                company_city={workplaceAccount.company_city}
                handleClick={this.props.handleClick} />) }

            </tbody>
          </table>
      </div>

    )

  }

}

export default WorkplaceAccountList;