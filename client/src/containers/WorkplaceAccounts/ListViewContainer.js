import React from 'react';
import { Link } from 'react-router-dom';

import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';

class WorkplaceAccountListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        workplaceAccounts: [],
        managers: []
      };
    }

    toggleSwitch = (id, active) => {
      this.setState({
        workplaceAccounts: this.state.workplaceAccounts.map(account => 
          (account.id === id ? Object.assign({}, account, { active }) : account))
      }, function () {
        this.persistUpdate(id);
      })
    }

    persistUpdate = (id) => {
      let accountIndex = this.state.workplaceAccounts.findIndex(function(account) {
        return account.id === id;
      })
      fetch('/workplace_accounts/' + id, { 
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.workplaceAccounts[accountIndex])
      })
    }

    separateDays = () => {
      const daysArray = ['monday', 'tuesday', 'wednesday', 'thursday'];
      const dayArray = [];
      for (let i=0; i < daysArray.length; i++) {
        dayArray[i] = this.state.workplaceAccounts.filter(function (e) {
          return e.delivery_day.toLowerCase() === daysArray[i];
        })
      }
      return dayArray;
      // const managersArray = [...new Set(this.state.workplaceAccounts["manager"]["name"])];
    }

    returnDay = (dayArray) => {
      if ( dayArray[0] ) {
        return dayArray[0]["delivery_day"].charAt(0).toUpperCase() + dayArray[0]["delivery_day"].slice(1)
            } else {
        return ' ';
      }
    } 

    listManagerOptions = () => {
      let options="";
      this.state.managers.map(manager =>
        options += '<option value="' + manager.name + '">' + manager.name.charAt(0).toUpperCase() + manager.name.slice(1) + '</option>'
        )
      return options;
    }

    componentDidMount() {
      Promise.all([
          fetch('/workplace_accounts'),
          fetch('/managers')
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
          workplaceAccounts: data1, 
          managers: data2
      }));
    }

    render() {
      return (
        <div>
          { this.separateDays().map( (day, i) =>
              <div key={i}>
                <h2>{this.returnDay(day)}</h2>
                <WorkplaceAccountList 
                  workplaceAccounts={day} 
                  toggleSwitch={this.toggleSwitch} />
              </div> 
          )}
        <Link className="add-new-button" to="/workplace_accounts/new">Add New Account</Link>
        
        </div>
      )
    }
  }

  export default WorkplaceAccountListContainer;