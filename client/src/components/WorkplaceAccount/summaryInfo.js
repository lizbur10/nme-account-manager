import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class WorkplaceAccountSummary extends Component {
  render () {
    return (
      <div>
        {/* <p>{this.props.company_name}, {this.props.company_city}<button onClick={this.props.handleClick}>Edit </button></p> */}
        <Link to={{
          pathname: "/workplace_accounts"
        }}>{this.props.company_name}, {this.props.company_city}</Link>
      </div>
    )
  }
}

export default withRouter(WorkplaceAccountSummary);