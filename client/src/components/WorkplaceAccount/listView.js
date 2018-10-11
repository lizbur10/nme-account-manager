import React from 'react';
import WorkplaceAccountSummary from '../../components/WorkplaceAccount/summaryInfo';

const WorkplaceAccountList = ({ workplaceAccounts }) => (
    <div>
      <h2>Workplace Accounts:</h2>
      { workplaceAccounts.map(workplaceAccount => <WorkplaceAccountSummary key={workplaceAccount.id} company_name={workplaceAccount.company_name} company_city={workplaceAccount.company_city} />) }
    </div>
)

export default WorkplaceAccountList;