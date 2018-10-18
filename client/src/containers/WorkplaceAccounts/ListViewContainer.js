import React from 'react';
import WorkplaceAccountList from '../../components/WorkplaceAccount/listView';

class WorkplaceAccountListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        workplaceAccounts: []
      };
    }

    componentDidMount() {
      console.log(this.props);
      fetch('/workplace_accounts')
        .then(response => response.json())
        .then(this.sortData)
        .then(workplaceAccounts => this.setState({ workplaceAccounts }))
  }

    sortData = ( data ) => {
      this.sortByDay(data, this.getDaySortVal);
      // this.sortByManager(data);
      return data;
    }

    sortByDay = ( data, getDaySortVal ) => {
      data.sort(function(a,b){
        a = getDaySortVal(a['delivery_day']);
        b = getDaySortVal(b['delivery_day']);
        return ( a > b );
      });
    }

    getDaySortVal = stringVal => {
      switch(stringVal) {
        case 'monday':
          return 0;
        case 'tuesday':
          return 1;
        case 'wednesday':
          return 2;
        case 'thursday':
          return 3;
        case 'friday':
          return 4;
        default:
          return 5;
      }
    }

    handleClick = event => {
      event.preventDefault();
      console.log(event);
      const url='workplace_accounts/' + event.target.value;
      window.location.assign(url); 
  }

    render() {
      return <WorkplaceAccountList workplaceAccounts={this.state.workplaceAccounts} handleClick={this.handleClick}/>
    }
  }

  export default WorkplaceAccountListContainer;