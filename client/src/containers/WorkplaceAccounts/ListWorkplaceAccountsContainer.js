import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';
import * as workplaceAccountActions from '../../actions/index';

class WorkplaceAccountListContainer extends Component {

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

    toggleSwitch = (accountInfo, active) => {
      const updatedAccount = Object.assign({}, accountInfo, { active });
      this.props.onSubmitUpdatedAccount(updatedAccount, false);
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.fetchWorkplaceAccounts();
      this.props.fetchManagers();
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

  const mapStateToProps = state => {
    return {
      workplaceAccounts: state.workplaceAccount.workplaceAccounts,
      managers: state.manager.managers
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        onSubmitUpdatedAccount: (accountInfo, msg) => dispatch( workplaceAccountActions.persistUpdatedWorkplaceAccount(accountInfo, msg)),
        fetchWorkplaceAccounts: () => dispatch( workplaceAccountActions.fetchWorkplaceAccounts()),
        fetchManagers: () => dispatch( workplaceAccountActions.fetchManagers())
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(WorkplaceAccountListContainer);