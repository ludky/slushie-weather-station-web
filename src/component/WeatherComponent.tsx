import gql from "graphql-tag";
import * as React from "react";
import {ChildDataProps, graphql} from "react-apollo";

const LIST_WEATHER_QUERY = gql` 
    query ListWeatherDataQuery {
        listSlushieWeatherModels {
            items {
                deviceId
                temperature
                humidity
                datetime
            }

        }
    }`;

type WeatherDatum = {
    deviceId: string
    temperature: string
    humidity: string
    datetime: string
};

type Response = {
    listSlushieWeatherModels: {
        items: WeatherDatum[]
    }
};

type ChildProps = ChildDataProps<{}, Response>

const Weather = graphql<{}, Response, {}, ChildProps>(LIST_WEATHER_QUERY);

export default Weather(({ data: { loading, listSlushieWeatherModels, error } }) => {
    if (loading) return <div>Loading</div>;
    if (error) return <h1>ERROR</h1>;
    console.debug(listSlushieWeatherModels);
    return (
        <div>
            <p>DeviceId: {listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].deviceId : 'NO DATA'}</p>
            <p>Temperature: {listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].temperature + " C": 'NO DATA'}</p>
            <p>Humidity: {listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].humidity + " %": 'NO DATA'}</p>
            <p>Datetime: {listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].datetime : 'NO DATA'}</p>
            <p>More data</p>
        </div>
    )
});
