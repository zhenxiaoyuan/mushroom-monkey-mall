// fetch - get.js

import 'whatwg-fetch';
import 'es6-promise'; // 处理较旧浏览器的兼容性

export function get(url) {
    return fetch(url, {
        credentials: 'include', // fetch是默认不带cookie的
        headers: {
            'Accept': 'application/json, text/plain, */*'
        },
    });
};