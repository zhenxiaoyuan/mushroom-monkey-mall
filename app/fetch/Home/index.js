// fetch-Home-index.js

import { get } from '../get';

export function getAdData() {
    return get('/api/home/ad');
};

// export const getHomeAdData = () => {
//     return get('/api/homead');
// }

export function getListData(city, page) {
    return get('/api/home/list/' + encodeURIComponent(city) + '/' + page);
};