// components - DetailInfo - index.js
// 详情信息组件

import React from 'react';

import './style.less';

// components
import Star from '../Star';

class DetailInfo extends React.Component {
    render() {
        const info = this.props.info;

        return (
            <div id="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={info.img} />
                    </div>
                    <div className="info-content">
                        <h1>{info.title}</h1>
                        <div className="star-container">
                            <Star star={info.star} />
                            <span className="price">¥{info.price}</span>
                        </div>
                        <p className="sub-title">{info.subTitle}</p>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: info.desc}} className="info-desc"></p>
                </div>
            </div>
        );
    }
}

export default DetailInfo;