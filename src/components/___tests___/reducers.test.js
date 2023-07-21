import dataReducer from '../reducers';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, fetchDataLoading } from '../actions';

describe('dataReducer', () => {
  it('should handle FETCH_DATA_REQUEST', () => {
    const action = fetchDataRequest();
    const expectedState = {
      data: [],
      loading: true,
      error: null,
    };
    const newState = dataReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle FETCH_DATA_SUCCESS', () => {
    const books = [{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }];
    const action = fetchDataSuccess(books);
    const expectedState = {
      data: books,
      loading: false,
      error: null,
    };
    const newState = dataReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle FETCH_DATA_FAILURE', () => {
    const error = 'API error';
    const action = fetchDataFailure(error);
    const expectedState = {
      data: [],
      loading: false,
      error: 'API error',
    };
    const newState = dataReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle FETCH_DATA_LOADING', () => {
    const action = fetchDataLoading();
    const expectedState = {
      data: [],
      loading: true,
      error: null,
    };
    const newState = dataReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });
});
