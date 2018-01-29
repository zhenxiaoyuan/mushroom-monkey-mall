// components - Star - index.js
// 评价星星组件

import React from 'react';

import './style.less';

class Star extends React.Component {
    render() {
        let star = this.props.star;
        if (star > 5) {star = 5}    // star数量最多为5

        return (
            <div className="star-container">
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        // 有light的星星被点亮
                        const lightClass = star >= item ? " light" : "";
                        return (
                            <span key={index} className={"icon-star-full" + lightClass}></span>
                        );
                    })
                }
            </div>
        );
    }
}

export default Star;