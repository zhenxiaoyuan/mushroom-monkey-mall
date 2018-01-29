// components - CommentsList - Item - index.js
// 评论列表-评论项

import React from 'react';

import './style.less';

// components
import Star from '../../Star';

class Item extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <div className="comments-item">
                <h3>
                    <span className="icon-user"></span>
                    &nbsp;
                    {data.username}
                </h3>
                <Star star={data.star} />
                <p>{data.comment}</p>
            </div>
        );
    }
}

export default Item;