import axios from 'axios';

const apiHost = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";
const woeid = "2423945";

//////////////////////
//                  //
//   GET WEATHER    //
//                  //
//////////////////////

export const WEATHER_FETCH_START   = "WEATHER_FETCH_START";
export const WEATHER_FETCH_SUCCESS = "WEATHER_FETCH_SUCCESS";
export const WEATHER_FETCH_FAILURE = "WEATHER_FECARDS_FETCH_FAILURETCH";

export const getWeatherData = () => dispatch => {
  console.log('actions getCard');
  dispatch({ type: WEATHER_FETCH_START });
  return axios.get(`${apiHost}/location/${woeid}`)
    .then( res => {
      console.log('SUCCESS', res);
      dispatch({ type: WEATHER_FETCH_SUCCESS, payload: res.data})
    })
    .catch( err => {
      console.log('FAILURE',err);
    });
}