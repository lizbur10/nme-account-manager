import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ManagerSummary extends Component {
  render () {
    return (
      <tr>
        <td>
          <label className="switch">
            <input type="checkbox" checked={this.props.active} onChange={() => this.props.toggleSwitch(this.props.id, !this.props.active)} />
            <span className="slider"></span>
          </label>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td><Link className="edit-button" to={{
            pathname: "/managers/" + this.props.id
          }}>Edit</Link>
        </td>
      </tr>
    )
  }
}

export default ManagerSummary;