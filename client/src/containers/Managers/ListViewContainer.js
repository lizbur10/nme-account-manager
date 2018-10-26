import React from 'react';
import { Link } from 'react-router-dom';

import ManagerList from '../../components/Manager/listView';

class ManagerListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        managers: []
      };
    }

    toggleSwitch = (id, active) => {
      this.setState({
        managers: this.state.managers.map(manager => 
          (manager.id === id ? Object.assign({}, manager, { active }) : manager))
      }, function () {
        this.persistUpdate(id);
      })
    }

    persistUpdate = (id) => {
      let managerIndex = this.state.managers.findIndex(function(manager) {
        return manager.id === id;
      })
      fetch('/managers/' + id, { 
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.managers[managerIndex])
      })
    }

    componentDidMount() {
      fetch('/managers') 
      .then(response => response.json())
      .then(data => {
        this.setState({
            managers: data
        })
      })
}

    render() {
      return (
        <div>
              <div>
                <h2>Account Managers</h2>
                <ManagerList 
                  managers={this.state.managers} 
                  toggleSwitch={this.toggleSwitch} />
              </div> 
        <Link className="add-new-button" to="/managers/new">Add New Account Manager</Link>
        
        </div>
      )
    }
  }

  export default ManagerListContainer;