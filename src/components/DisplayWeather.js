import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from '../store/actions';

import WeatherDayDisplay from './WeatherDayDisplay';

const DisplayWeather = (props) => {

  useEffect( () => {
    props.getWeatherData();
  }, []);

  // console.log('props weather',props.weather)

  if(!props.weather) {
    return(
      <div>loading...</div>
    )
  }

  return(
    <main>
      <h1>Weather for {props.weather.title}</h1>
      <ul className="five-day-forecast">
        {
          props.weather.consolidated_weather.map( day => {
            return <WeatherDayDisplay day={day} />
          })
        }
      </ul>
    </main>
  )
}

const mapStateToProps = state => ({
  weather:    state.weather,
  error:      state.error,
  isFetching: state.isFetching
})
export default connect( mapStateToProps, { getWeatherData } )(DisplayWeather);