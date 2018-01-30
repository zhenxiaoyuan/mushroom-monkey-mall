// reducers - index.js

import { combineReducers } from 'redux';

import userinfo from './userinfo';
import favourite from './favourite';

// 合并多个reducer
const rootReducer = combineReducers({
    userinfo,
    favourite,
});

export default rootReducer;