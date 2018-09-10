import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers(
  {
    teamMembers: mockReducer,
    miningPools: mockReducer,
    blockExplorers: mockReducer,
    wallets: mockReducer,
    exchanges: mockReducer,
    blogPosts: mockReducer,
    blogTags: mockReducer,
    marketStats: mockReducer,
    tagPosts: mockReducer,
    faq: mockReducer,
    singlePost: mockReducer,
    messages: mockReducer,
    auditsList: mockReducer,
    audit: mockReducer,
  });

export default rootReducer;
