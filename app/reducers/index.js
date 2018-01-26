// reducers - index.js

import { combineReducers } from 'redux';

import userinfo from './userinfo';

// 合并多个reducer
const rootReducer = combineReducers({
    userinfo,
});

export default rootReducer;