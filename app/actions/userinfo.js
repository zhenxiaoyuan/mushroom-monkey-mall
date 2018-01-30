// actions - userinfo.js
// 处理用户数据的action

import * as actionTypes from '../constants/userinfo';

// 更新城市名称
export function updateUserInfo(data) {
    return {
        type: actionTypes.USERINFO,
        data,
    }
};