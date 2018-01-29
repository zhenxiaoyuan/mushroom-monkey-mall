// fetch - Search - index.js
// 负责获取搜索页的数据

import { get } from '../get';

// 获取搜索结果，需要参数
// { city: 城市,
//   page: 页数,
//   categroy: 品类,
//   keywords: 关键字 }
export const getListData = (city, page, category, keywords) => {
    const keywordsStr = keywords ? "/" + keywords : "";
    return get("/api/search/" + encodeURIComponent(city) + "/" + page + "/" + category + keywordsStr);
}