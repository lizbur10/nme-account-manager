import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class WorkplaceAccountSummary extends Component {
  render () {
    return (
      <div>
        {/* <p>{this.props.company_name}, {this.props.company_city}<button onClick={this.props.handleClick}>Edit </button></p> */}
        <Link to={"/workplace_accounts/" + this.props.id}>
          {this.props.company_name}, {this.props.company_city}
        </Link>
      </div>
    )
  }
}

export default WorkplaceAccountSummary;