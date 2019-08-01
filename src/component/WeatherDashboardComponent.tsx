import gql from "graphql-tag";
import * as React from "react";
import {ChildDataProps, graphql} from "react-apollo";
import Table from "react-bootstrap/Table"
import "./WeatherDashboardComponent.css"
import WeatherCardComponent from "./WeatherCardComponent";
import {faBuilding, faClock, faTemperatureHigh} from '@fortawesome/free-solid-svg-icons'
import {faTint} from "@fortawesome/free-solid-svg-icons/faTint";

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

const WeatherDashboardComponent = graphql<{}, Response, {}, ChildProps>(LIST_WEATHER_QUERY);



export default WeatherDashboardComponent(({ data: { loading, listSlushieWeatherModels, error } }) => {
    if (loading) return <div>Loading</div>;
    if (error) return <h1>ERROR</h1>;
    console.debug(listSlushieWeatherModels);
    return (
    <div>
        <Table responsive="md" variant="light">
            <thead>
                <tr>
                    <th scope={"row"}>Slushie</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <WeatherCardComponent title={"Room"} text={listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].deviceId: 'NO DATA'} icon={faBuilding}/>
                </td>
                <td>
                    <WeatherCardComponent title={"Last Updated"} text={listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].datetime: 'NO DATA'} icon={faClock}/>
                </td>
            </tr>
            <tr>
                <td>
                    <WeatherCardComponent title={"Humidity"} text={listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].humidity + " %": 'NO DATA'} icon={faTint}/>
                </td>
                <td>
                    <WeatherCardComponent title={"Temperature"} text={listSlushieWeatherModels != null ? listSlushieWeatherModels.items[0].temperature + " C": 'NO DATA'} icon={faTemperatureHigh}/>
                </td>
            </tr>
            </tbody>
        </Table>
    </div>
    )
});
