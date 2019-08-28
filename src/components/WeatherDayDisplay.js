import React from 'react';

const WeatherDayDisplay = props => {
  console.log('the props',props);
  console.log('the props',props.day.weather_state_abbr);
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let date = new Date(props.day.applicable_date);

  return (
    <li>
      <div className="class-card">
        <h2>{dayOfWeek[date.getDay()]}</h2>
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
              <td>{Math.round(props.day.min_temp)}&deg;</td>
              <td>{Math.round(props.day.max_temp)}&deg;</td>
              <td>{props.day.humidity}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  )
}

export default WeatherDayDisplay;