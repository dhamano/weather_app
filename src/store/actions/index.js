import axios from 'axios';

const apiHost = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";
const woeid = "2423945";

export const WEATHER_FETCH_START   = "WEATHER_FETCH_START";
export const WEATHER_FETCH_SUCCESS = "WEATHER_FETCH_SUCCESS";
export const WEATHER_FETCH_FAILURE = "WEATHER_FECARDS_FETCH_FAILURETCH";

export const getWeatherData = () => dispatch => {
  dispatch({ type: WEATHER_FETCH_START });
  return axios.get(`${apiHost}/location/${woeid}`)
    .then( res => {
      console.log(res.data);
      dispatch({ type: WEATHER_FETCH_SUCCESS, payload: res.data})
    })
    .catch( err => {
      console.log('WEATHER FAILURE',err.response);
      dispatch({ type: WEATHER_FETCH_FAILURE, payload: err.response });
    });
}

export const WEATHER_QUERY_START   = "WEATHER_QUERY_START";
export const WEATHER_QUERY_FAILURE = "WEATHER_QUERY_FAILURE";

export const searchQuery = query => dispatch => {
  dispatch({ type: WEATHER_QUERY_START });
  return axios.get(`${apiHost}/location/search/?query=${query}`)
    .then( res => {
      if(res.data.length > 0) {
        let woeid = res.data[0].woeid;
        dispatch(getWoeidWeather(woeid));
      } else {
        dispatch({ type: WEATHER_QUERY_FAILURE, payload: {status: 404, statusText: "City Not Found"} });
      }
    })
    .catch( err => {
      dispatch({ type: WEATHER_QUERY_FAILURE, payload: err.response });
    });
}

export const WOEID_QUERY_START   = "WEATHER_QUERY_START";
export const WOEID_QUERY_SUCCESS = "WEATHER_QUERY_SUCCESS";
export const WOEID_QUERY_FAILURE = "WEATHER_QUERY_FAILURE";

export const getWoeidWeather = woeid => dispatch => {
  dispatch({ type: WOEID_QUERY_START });
  return axios.get(`${apiHost}/location/${woeid}/`)
    .then( res => {
      console.log('query woeid',res)
      dispatch({ type: WOEID_QUERY_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: WOEID_QUERY_FAILURE, payload: err.response });
    });
}

