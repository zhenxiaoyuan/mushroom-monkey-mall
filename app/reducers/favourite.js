// reducers - favourite.js
// 收藏的reducers

import * as actionTypes from '../constants/favourite';

const initState = [];

export default function favourite(state = initState, action) {
    switch (action.type) {
        case actionTypes.FAVOURITE_UPDATE:
            return action.data;

        case actionTypes.FAVOURITE_ADD:
            return state.unshift(action.data);

        case actionTypes.FAVOURITE_REMOVE:
            return state;
            // var arr = state;
            // for (var i = 0; i < state.length; i++) {
            //     if (arr[i].id == action.data) {
            //         arr.splice(i, 1);
            //         break;
            //     }
            // }
            // return arr;
            // return state.filter(item => {
            //     if (item.id !== action.data.id) {
            //         return item
            //     }
            // })
            // console(state);

        default:
            return state;
    }
}

