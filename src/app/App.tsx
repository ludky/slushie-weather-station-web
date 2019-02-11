import logo from '../assets/logo.svg';
import './App.css';
import { ApolloProvider } from "react-apollo";
import React from "react";
import ApolloClient from "apollo-boost";
import TemperatureComponent from "../component/WeatherComponent";
const client = new ApolloClient({
  uri: 'https://rxmmnanjazc63nzfsn6q57nytu.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {"x-api-key": 'da2-3f73hehbvrg5bpfxwozxiaepla'}
});

const App = () => (
    <ApolloProvider client={client}>
      <TemperatureComponent />
    </ApolloProvider>
);

export default App;
