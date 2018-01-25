// components-List-index.js

import React from 'react';

import './style.less';

import Item from './Item';

class List extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="list-container">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Item data={item}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default List;