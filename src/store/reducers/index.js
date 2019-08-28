
import {
  WEATHER_FETCH_START, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAILURE,
  WEATHER_QUERY_START, WEATHER_QUERY_FAILURE,
  WOEID_QUERY_START, WOEID_QUERY_SUCCESS, WOEID_QUERY_FAILURE
} from '../actions';

const initialState = {
  weather: null,
  error: '',
  queryError: '',
  isFetching: false,
  isFetchingQuery: false
}

export default ( state = initialState, action ) => {
  switch(action.type) {
    case WEATHER_FETCH_START:
      return {
        ...state,
        error: '',
        isFetchings: true
      }
      case WEATHER_FETCH_SUCCESS:
        return {
          ...state,
          weather: action.payload,
          error: '',
          isFetching: false
        }
      case WEATHER_FETCH_FAILURE:
        return {
          ...state,
          weather: [],
          error: action.payload,
          isFetching: false
        }
      case WEATHER_QUERY_START:
        return {
          ...state,
          queryError: '',
          isFetchingQuery: true,
        }
      case WEATHER_QUERY_FAILURE:
        return {
          ...state,
          queryError: action.payload,
          isFetchingQuery: false
        }
      case WOEID_QUERY_START:
        return {
          ...state,
          queryError: '',
          isFetchingQuery: true,
        }
      case WOEID_QUERY_SUCCESS:
        return {
          ...state,
          weather: action.payload,
          queryError: '',
          isFetchingQuery: false
        }
    default:
      return state;
  }
}