import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers(
  {
    blogPosts: mockReducer,
    blogTags: mockReducer,
    marketStats: mockReducer,
    tagPosts: mockReducer,
  });

export default rootReducer;
