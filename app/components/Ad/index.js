// components - Ad - index.js
// 广告 { 标题 + 三列图片 }

import React from 'react';

import './style.less';

class HomeAd extends React.Component {
    render() {
        return (
            <div id="ad">
            <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                {this.props.data.map((item, index) => {
                    return (
                        <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title} />
                            </a>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default HomeAd;