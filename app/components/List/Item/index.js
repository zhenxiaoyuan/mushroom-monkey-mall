// components - List - Item - index.js
// 单个产品显示组件

import React from 'react';

// router
import { Link } from 'react-router-dom';

import './style.less';

class Item extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="list-item clear-fix">
                <Link to={"/detail/" + data.id}>
                    <div className="item-img-container float-left">
                        <img src={data.img} alt={data.title} />
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {data.subTitle}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span className="price float-left">¥{data.price}</span>
                            <span className="mumber float-right">已售{data.mumber}</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Item;