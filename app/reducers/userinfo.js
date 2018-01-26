// reducers - userinfo.js

import * as actionTypes from '../constants/userinfo';

// 这里初始化赋值是否可行，一会试试。
const initState = {};

export default function userinfo(state = initState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_CITYNAME:
            return action.data;

        default:
            return state;
    }
}