import React, { Component } from 'react';
import WorkplaceAccount from '../../components/WorkplaceAccount/WorkplaceAccount';

class WorkplaceAccountContainer extends Component {
    state = {
        companyInfo: [] 
    }

    changeHandler = (event) => {
        this.setState({
            companyInfo: {
                ...this.state.companyInfo,
                [event.target.name]: event.target.value
            }
        })
      }


    render () {
        return (
            <React.Fragment>
                <WorkplaceAccount companyInfo={this.state.companyInfo} changeHandler={this.changeHandler} /> 
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch('/workplace_accounts/1')
          .then(response => response.json())
          .then(data => {
            this.setState({
              companyInfo: data
            })
          })
    }
}

export default WorkplaceAccountContainer;