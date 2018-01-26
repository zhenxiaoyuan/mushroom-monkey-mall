// fetch - Home - index.js

import { get } from '../get';

// 获取Home页中的广告数据
export function getAdData() {
    return get('/api/home/ad');
};

// export const getHomeAdData = () => {
//     return get('/api/homead');
// }

// 获取Home页中的产品列表数据
export function getListData(city, page) {
    return get('/api/home/list/' + encodeURIComponent(city) + '/' + page);
};