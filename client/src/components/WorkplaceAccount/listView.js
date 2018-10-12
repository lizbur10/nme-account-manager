import React, { Component } from 'react';
import WorkplaceAccountSummary from '../../components/WorkplaceAccount/summaryInfo';

class WorkplaceAccountList extends Component {
  render () {
    return (
      <div>
        <h2>Workplace Accounts:</h2>
        { this.props.workplaceAccounts.map(workplaceAccount => 
          <WorkplaceAccountSummary 
            key={workplaceAccount.id} 
            company_name={workplaceAccount.company_name} 
            company_city={workplaceAccount.company_city}
            handleClick={this.props.handleClick} />) }
      </div>

    )

  }

}

export default WorkplaceAccountList;