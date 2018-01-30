// actions - favourite.js
// 处理收藏的actions

import * as actionTypes from '../constants/favourite';

// 更新
export const update = (data) => {
    return {
        type: actionTypes.FAVOURITE_UPDATE,
        data,
    }
};

// 添加收藏
export const add = (item) => {
    return {
        type: actionTypes.FAVOURITE_ADD,
        data: item,
    }
}

// 取消收藏
export const remove = (item) => {
    return {
        type: actionTypes.FAVOURITE_REMOVE,
        data: item,
    }
}