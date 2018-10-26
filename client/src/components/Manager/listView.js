import React, { Component } from 'react';

import ManagerSummary from '../../components/Manager/summaryInfo';

class ManagerList extends Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Active</th><th>Name</th><th>Email</th>
            </tr>
            { this.props.managers.map(manager => 
            <ManagerSummary 
              key={manager.id} 
              id={manager.id}
              active={manager.active}
              name={manager.name} 
              email={manager.contact_info} 
              toggleSwitch={this.props.toggleSwitch} />) }
          </tbody>
        </table>
      </div>

    )

  }

}

export default ManagerList;