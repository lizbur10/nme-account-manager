import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ManagerSummary extends Component {
  render () {
    return (
      <tr>
        <td>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={this.props.manager.active} 
              onChange={() => this.props.toggleSwitch(this.props.manager, !this.props.manager.active)} />
            <span className="slider"></span>
          </label>
        </td>
        <td>{this.props.manager.name}</td>
        <td>{this.props.manager.email}</td>
        <td>{this.props.manager.phone}</td>
        <td><Link className="edit-button" to={{
            pathname: "/managers/" + this.props.id
          }}>Edit</Link>
        </td>
      </tr>
    )
  }
}

export default ManagerSummary;