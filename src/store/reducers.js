import { combineReducers } from 'redux';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_LOADING, // Import the new action type for loading state
} from './actions';

// Define your initial state
const initialState = {
  data: [],
  loading: false, // Set the initial loading state to false
  error: null,
};

// Create your dataReducer to handle data-related actions
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true, // Set loading state to true when the API call is in progress
        error: null,
      };
    case FETCH_DATA_REQUEST:
      // ... (previous code)
    case FETCH_DATA_SUCCESS:
      // ... (previous code)
    case FETCH_DATA_FAILURE:
      // ... (previous code)
    default:
      return state;
  }
};

// Combine your reducers if you have more than one
const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers as needed
});

export default rootReducer;
