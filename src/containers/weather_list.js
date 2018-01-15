import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(forecast => forecast.main.temp);
        const pressures = cityData.list.map(forecast => forecast.main.pressure);
        const humidities = cityData.list.map(forecast => forecast.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="k" /></td>
                <td><Chart data={pressures} color="teal" units="hPa" /></td>
                <td><Chart data={humidities} color="violet" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (kelvin)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather : state.weather }
}

export default connect(mapStateToProps)(WeatherList);