import React, { Component } from 'react';

import ManagerSummary from '../../components/Manager/summaryInfo';

class ManagerList extends Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Active</th><th>Name</th><th>Email</th><th>Phone</th>
            </tr>
            { this.props.managers.map(manager =>               
              <ManagerSummary 
                key={(manager.id ? manager.id : "new_manager")} 
                id={manager.id}
                active={manager.active}
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