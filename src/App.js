import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://rxmmnanjazc63nzfsn6q57nytu.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {"x-api-key": 'da2-3f73hehbvrg5bpfxwozxiaepla'}
});
client.query({
  query: gql`
      query listWeatherData {
        listSlushieWeatherModels {
            items {
            deviceId
            temperature
            humidity
            datetime
        }
      }
}
  `,
}).then(data => console.log(data))
  .catch(error => console.error(error));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
