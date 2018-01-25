// containers-Home-subpage-homeAd.js

import React from 'react';

import { getAdData } from '../../../fetch/Home';

import HomeAd from '../../../components/HomeAd';

class Ad extends React.Component {
    constructor() {
    super();
        this.state = {
            adData: [],
        };
    }

    render() {
        return (
            <div>
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