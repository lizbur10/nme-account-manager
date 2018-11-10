import React, { Component } from 'react';

class Manager extends Component { 
    render () {
        return (
            <form>
                {this.props.createFields()}
            <button onClick={this.props.handleSubmit}>Submit</button>
            </form>
        );
    }
};

export default Manager;