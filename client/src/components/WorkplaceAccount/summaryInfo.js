import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class WorkplaceAccountSummary extends Component {
  render () {
    const delivery_day=this.props.delivery_day.charAt(0).toUpperCase() + this.props.delivery_day.slice(1);
    return (
      <tr>
        <td>{delivery_day}</td>
        <td>{this.props.manager}</td>
        <td>{this.props.company_name}</td>
        <td>{this.props.company_city}</td>
        <td><Link className="edit-button" to={{
            pathname: "/workplace_accounts/" + this.props.id
          }}>Edit</Link>
        </td>
      </tr>
    )
  }
}

export default WorkplaceAccountSummary;