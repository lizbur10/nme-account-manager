import React, {Component} from 'react';

class WorkplaceAccountSummary extends Component {
  render () {
    return (
      <div>
        <p>{this.props.company_name}, {this.props.company_city}<button onClick={this.props.handleClick}>Edit </button></p>
      </div>
    )
  }
}

export default WorkplaceAccountSummary;