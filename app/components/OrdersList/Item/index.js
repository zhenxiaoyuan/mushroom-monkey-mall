// components - OrdersList - Item - index.js
// 订单列表项组件

import React from 'react';

import './style.less';

class Item extends React.Component {
    render() {
        const data = this.props.data;
        
        return (
            <div className="clear-fix orders-item-container">
                <div className="orders-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="orders-item-comment float-right">
                    <button>评价</button>
                </div>
                <div className="orders-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
            </div>
        );
    }
}

export default Item;