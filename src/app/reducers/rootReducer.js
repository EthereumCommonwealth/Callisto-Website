import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers(
  {
    routing: routerReducer,
    blogPosts: mockReducer,
    marketStats: mockReducer,
  });

export default rootReducer;
