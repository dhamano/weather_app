import React from 'react';

const WeatherDayDisplay = props => {
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let date = new Date(props.day.applicable_date),
      minTemp = props.day.min_temp,
      maxTemp = props.day.max_temp,
      minFTemp = (minTemp * (9/5)) + 32,
      maxFTemp = (maxTemp * (9/5)) + 32;

  return (
    <li>
      <div className="class-card">
        <h2>{dayOfWeek[date.getUTCDay()]}</h2>
        <img src={`//www.metaweather.com/static/img/weather/${props.day.weather_state_abbr}.svg`} alt={`${props.day.weather_state_name}`} width="50" />
        <h3>{props.day.weather_state_name}</h3>
        <table>
          <thead>
            <tr>
              <td>LOW</td>
              <td>HIGH</td>
              <td>Humidity</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Math.round(props.isCelsius ? minTemp : minFTemp)}&deg;{props.isCelsius ? 'C' : 'F'}</td>
              <td>{Math.round(props.isCelsius ? maxTemp : maxFTemp)}&deg;{props.isCelsius ? 'C' : 'F'}</td>
              <td>{props.day.humidity}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  )
}

export default WeatherDayDisplay;