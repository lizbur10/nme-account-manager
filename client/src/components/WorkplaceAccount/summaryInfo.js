import React from 'react';

const WorkplaceAccountSummary = ({ company_id, company_name, company_city }) => (
    <div>
      <p>{company_name}, {company_city}</p>
    </div>
)

export default WorkplaceAccountSummary;