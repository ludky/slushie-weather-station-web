import './App.css';
import { ApolloProvider } from "react-apollo";
import React from "react";
import ApolloClient from "apollo-boost";
import WeatherDashboardComponent from "../component/WeatherDashboardComponent";
const client = new ApolloClient({
  uri: 'https://rxmmnanjazc63nzfsn6q57nytu.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {"x-api-key": process.env.REACT_APP_SLUSHIE_API_KEY}
});

const App = () => (
    <ApolloProvider client={client}>
      <WeatherDashboardComponent />
    </ApolloProvider>
);

export default App;
