// fetch - User - index.js
// 负责获取用户页数据

import { get } from '../get';

// 获取User页中的订单数据
export function getOrdersData() {
    return get('/api/user/orders');
};
