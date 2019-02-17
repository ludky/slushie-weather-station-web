import './App.css';
import { ApolloProvider } from "react-apollo";
import React from "react";
import ApolloClient from "apollo-boost";
import WeatherComponent from "../component/WeatherComponent";
const client = new ApolloClient({
  uri: 'https://rxmmnanjazc63nzfsn6q57nytu.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {"x-api-key": process.env.SLUSHIE_API_KEY}
});

const App = () => (
    <ApolloProvider client={client}>
      <WeatherComponent />
    </ApolloProvider>
);

export default App;
