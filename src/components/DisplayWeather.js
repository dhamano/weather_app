import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from '../store/actions';
import Loader from 'react-loader-spinner';

import WeatherDayDisplay from './WeatherDayDisplay';

const DisplayWeather = (props) => {
  const [isCelsius, setIsCelsius] = useState(false);

  let getWeatherData = props.getWeatherData;

  useEffect( () => {
    getWeatherData();
  }, [getWeatherData]);

  const onClickHandlerCelsius = () => {
    setIsCelsius(!isCelsius);
  }

  if(!props.weather) {
    return(
      <div className="loading">
        <Loader type="Circles" color="#7591ff" height={150} width={150} />
      </div>
    )
  }
  
  if(props.error) {
    return (
      <p className="error">
        {props.error.status} : {props.error.statusText}
      </p>
    )
  }

  return(
    <main>
      <h1>Weather for {props.weather.title}, {props.weather.parent.title}</h1>
      <div className="display-celcius">
        <div onClick={onClickHandlerCelsius} className={`switch-container ${isCelsius ? 'on' : 'off'}`}>
          <div className="switch-indicator"></div>
        </div>
        Show Celsius {isCelsius ? "on" : "off"}
      </div>
      <ul className="five-day-forecast">
        {
          props.weather.consolidated_weather.map( (day,i) => {
            return <WeatherDayDisplay day={day} isCelsius={isCelsius} key={'day-' + i.toString().padStart(2,"0")}/>
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