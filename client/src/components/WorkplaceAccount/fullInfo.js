import React, { Component } from 'react';

class WorkplaceAccount extends Component { 
    render () {
        return (
            <form>
                {this.props.createFields()}
                <button onClick={this.props.handleSubmit}>Submit</button>
                <button onClick={this.props.handleCancel}>Cancel</button>
            </form>
        );
    }
};

export default WorkplaceAccount;