
import { WEATHER_FETCH_START, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAILURE } from '../actions';

const initialState = {
  weather: null,
  error: '',
  isFetching: false
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
    default:
      return state;
  }
}