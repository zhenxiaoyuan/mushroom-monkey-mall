// fetch-Home-index.js

import { get } from '../get';

export function getHomeAdData() {
    return get('/api/homead');
};

// export const getHomeAdData = () => {
//     return get('/api/homead');
// }

export function getHomeListData(city, page) {
    return get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
};