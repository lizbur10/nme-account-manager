const WorkplaceAccountList = ({ workplaceAccounts }) => (
    <div>
      { workplaceAccounts.map(workplaceAccount => <WorkplaceAccountSummary company_id={workplaceAccount.id} company_name={workplaceAccount.company_name} company_city={workplaceAccount.companyCity} />) }
    </div>
)