import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';
import * as workplaceAccountActions from '../../actions/index';

class WorkplaceAccountListContainer extends React.Component {
    separateDays = () => {
      const daysArray = ['monday', 'tuesday', 'wednesday', 'thursday'];
      const dayArray = [];
      if (this.props.workplaceAccounts) {
        for (let i=0; i < daysArray.length; i++) {
          dayArray[i] = this.props.workplaceAccounts.filter(function (account) {
            return account.delivery_day.toLowerCase() === daysArray[i];
          })
        }
      }
      return dayArray;
    }

    returnDay = (dayArray) => {
      if ( dayArray[0] ) {
        return dayArray[0]["delivery_day"].charAt(0).toUpperCase() + dayArray[0]["delivery_day"].slice(1)
            } else {
        return ' ';
      }
    } 

    componentDidMount() {
      this.props.onFetchWorkplaceAccounts();
      this.props.onFetchManagers();
    }

    render() {
      return (
        <div>
          { this.separateDays().map( (day, i) =>
              <div key={i}>
                <h2>{this.returnDay(day)}</h2>
                <WorkplaceAccountList 
                  workplaceAccounts={day}
                  toggleSwitch={this.props.onToggleSwitch} />
              </div> 
          )}
        <Link className="add-new-button" to="/workplace_accounts/new">Add New Account</Link>
        
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      workplaceAccounts: state.workplaceAccount.workplaceAccounts,
      managers: state.manager.managers
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        onToggleSwitch: (workplaceAccount, active) => dispatch( workplaceAccountActions.workplaceAccountsToggleSwitch(workplaceAccount, active) ),
        onFetchWorkplaceAccounts: () => dispatch( workplaceAccountActions.fetchWorkplaceAccounts()),
        onFetchManagers: () => dispatch( workplaceAccountActions.fetchManagers())
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(WorkplaceAccountListContainer);