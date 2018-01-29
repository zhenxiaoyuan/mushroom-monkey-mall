// containers - Home - subpage - Ad.js
// 主页广告子页面

import React from 'react';

import { getAdData } from '../../../fetch/Home';

import HomeAd from '../../../components/Ad';

class Ad extends React.Component {
    constructor() {
    super();
        this.state = {
            adData: [], // 存储服务器返回的广告数据
        };
    }

    render() {
        return (
            <div>
                {/* 讲数据传入组件后实现样式 */}
                <HomeAd data={this.state.adData} />
            </div>
        );
    }

    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            return res.json(); // 注意这里的.json()是个方法
        }).then((json) => {
            const data = json;
            if (data.length) {
                this.setState({
                    adData: data,
                });
            }
        });
    }
}

export default Ad;