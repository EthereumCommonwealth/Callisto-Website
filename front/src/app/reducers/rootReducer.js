import { combineReducers } from 'redux';
import mockReducer from './mockReducer';
import authReducer from './authReducer';

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
    auditDetail: mockReducer,
    user: authReducer,
  });

export default rootReducer;
