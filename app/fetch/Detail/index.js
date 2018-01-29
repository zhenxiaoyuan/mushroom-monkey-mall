// fetch - Detail - index.js
// 负责获取详情页的数据

import { get } from '../get';

// 获取详情页信息，需要参数
// { id: 商户id }
export const getInfoData = (id) => {
    return get("/api/detail/info/" + id);
}

// 获取详情页评价信息，需要参数
// { id: 商户id,
//   page: 评价页数 }
export const getCommentsData = (id, page) => {
    return get("/api/detail/comments/" + id + "/" + page);
}