// components - OrdersList - index
// 订单列表组件

import React from 'react';

import './style.less';

// components
import Item from './Item';

class OrdersList extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <Item key={index} data={item}></Item>
                        )
                    })
                }
            </div>
        );
    }
}

export default OrdersList;