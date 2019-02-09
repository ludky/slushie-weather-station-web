import  React, { Component } from 'react';

class TemperatureComponent extends React.Component  {
    render() {
        return (
            <h1> Hello React, from {this.props.children} </h1>
        );
    }
}

export default TemperatureComponent;