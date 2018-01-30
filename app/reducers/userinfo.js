// reducers - userinfo.js

import * as actionTypes from '../constants/userinfo';

import { CITY_NAME, USER_NAME } from '../localData/localStorageKey';

// 这里初始化赋值是否可行，一会试试。
const initState = {
    cityName: (localStorage.getItem(CITY_NAME) ? localStorage.getItem(CITY_NAME) : "北京"),
    // userName: (localStorage.getItem(USER_NAME) ? localStorage.getItem(USER_NAME) : ""),
}

export default function userinfo(state = initState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_CITYNAME:
            return action.data;

        default:
            return state;
    }
}