import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class WorkplaceAccountSummary extends Component {
  render () {
    console.log("summaryInfo props: ", this.props);
    const delivery_day=this.props.workplaceAccount.delivery_day.charAt(0).toUpperCase() + this.props.workplaceAccount.delivery_day.slice(1);
    return (
      <tr>
        <td>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={this.props.workplaceAccount.active} 
              onChange={() => this.props.toggleSwitch(this.props.workplaceAccount, !this.props.workplaceAccount.active)} />
            <span className="slider"></span>
          </label>
        </td>
        <td>{delivery_day}</td>
        <td>{this.props.workplaceAccount.manager.name}</td>
        <td>{this.props.workplaceAccount.company_name}</td>
        <td>{this.props.workplaceAccount.company_city}</td>
        <td><Link className="edit-button" to={{
            pathname: "/workplace_accounts/" + this.props.workplaceAccount.id
          }}>Edit</Link>
        </td>
        <td>
          <button onClick={() => this.props.handleClick(this.props.workplaceAccount, this.props.workplaceAccount.counter + 1)}>Click me</button>
        </td>   
        <td>{this.props.workplaceAccount.counter}</td>   
      </tr>
    )
  }
}

export default WorkplaceAccountSummary;