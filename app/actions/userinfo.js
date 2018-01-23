// actions-userinfo.js

import * as actionTypes from '../constants/userinfo';

export function updateCityName(data) {
    return {
        type: actionTypes.USERINFO_CITYNAME,
        data,
    }
};