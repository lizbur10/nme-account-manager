import React, { Component } from 'react';

import ManagerSummary from '../../components/Manager/summaryInfo';

class ManagerList extends Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Active</th><th>Market</th><th>Name</th><th>Email</th><th>Phone</th>
            </tr>
            { this.props.managers.map(manager => 
            <ManagerSummary 
              key={manager.id} 
              id={manager.id}
              active={manager.active}
              market={manager.market.name}
              name={manager.name} 
              email={manager.email} 
              phone={manager.phone}
              toggleSwitch={this.props.toggleSwitch} />) }
          </tbody>
        </table>
      </div>

    )

  }

}

export default ManagerList;