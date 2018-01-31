// containers - User - subpages - List.js
// 用户页的订单列表

import React from 'react';

// fetch
import { getOrdersData } from '../../../fetch/User';

// components
import OrdersList from '../../../components/OrdersList';

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            ordersData: [],
        };
    }
    render() {
        return (
            <div>
                <OrdersList data={this.state.ordersData} />
            </div>
        );
    }

    componentDidMount() {
        const result = getOrdersData();

        result.then((res) => {
            return res.json();
        }).then((json) => {
            const data = json;
            if (data.length) {
                this.setState({
                    ordersData: data,
                });
            }
        });
    }
}

export default Orders;