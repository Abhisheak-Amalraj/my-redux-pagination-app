import { fetchDataFromAPI } from '../api';

// Define your action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Create your action creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Define your action type for loading state
export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';

// Create your action creator for loading state
export const fetchDataLoading = () => ({
  type: FETCH_DATA_LOADING,
});

// Async action creator to fetch data from the API
export const fetchBooksData = (page, searchQuery) => {
  return async (dispatch) => {
    dispatch(fetchDataLoading()); // Set the loading state to true

    try {
      const data = await fetchDataFromAPI(page, searchQuery);
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
