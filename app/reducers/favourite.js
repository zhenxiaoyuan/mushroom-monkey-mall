// reducers - favourite.js
// 收藏的reducers

import * as actionTypes from '../constants/favourite';
import { FAVOURITE_REMOVE } from '../constants/favourite';

const initState = [];

// 从数组中删除某元素
function remove(item, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === item.id) {
            arr.splice(i, 1);
            return arr;
        }
    }
}

export default function favourite(state = initState, action) {
    switch (action.type) {
        case actionTypes.FAVOURITE_UPDATE:
            return action.data;

        case actionTypes.FAVOURITE_ADD:
            state.unshift(action.data);
            return state;

        case actionTypes.FAVOURITE_REMOVE:
            return remove(action.data, state);

            // 使用filter后，state中的值只是被过滤，而非删除
            // state.filter((item) => {
            //     if (item.id !== action.data.id) {
            //         return item
            //     }
            // })
            // return state;
        
        default:
            return state;
    }
}

