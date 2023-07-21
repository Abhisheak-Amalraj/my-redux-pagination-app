import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import middleware from './middleware';

const store = createStore(rootReducer, applyMiddleware(middleware));

export default store;
