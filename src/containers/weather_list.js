import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city.name;
    const temp = _.map(cityData.list.map((weather) => {
      return weather.main.temp;
    }), (temp) => temp - 273.15);
    const pressure = cityData.list.map((weather) => {
      return weather.main.pressure;
    });
    const humidity = cityData.list.map((weather) => {
      return weather.main.humidity;
    });
    return (
      <tr key={city}>
        <td>{city}</td>
        <td>
          <Chart data={temp} color='red' units='C'/>
        </td>
        <td>
          <Chart data={pressure} color='green' units='hPa'/>
        </td>
        <td>
          <Chart data={humidity} color='orange' units='%'/>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
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

function mapStatetoProps(state) {
  return { weather: state.weather };
}

export default connect(mapStatetoProps)(WeatherList);
