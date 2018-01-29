// components - List - index.js
// 产品表单组件

import React from 'react';

import './style.less';

import Item from './Item';

class List extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div id="list">
                <div className="list-container">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Item data={item} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;