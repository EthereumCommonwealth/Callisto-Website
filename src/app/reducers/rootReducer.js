import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers(
  {
    blogPosts: mockReducer,
    marketStats: mockReducer,
  });

export default rootReducer;
