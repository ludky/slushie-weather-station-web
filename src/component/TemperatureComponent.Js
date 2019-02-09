import  React, { Component } from 'react';

class TemperatureComponent extends Component  {
    render() {
        return (
            <h1> Hello React, from {this.props.name} </h1>
        );
    }
}

export default TemperatureComponent;