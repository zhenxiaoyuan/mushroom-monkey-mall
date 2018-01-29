// components - CommentsList - index.js
// 评论列表组件

import React from 'react';

import './style.less';

// components
import Item from './Item';

class CommentsList extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <div className="comments-list">
                {
                    data.map((item, index) => {
                        return (
                            <Item key={index} data={item} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CommentsList;