// components - Header - index.js
// 通用头部组件

import React from 'react';

import './style.less';

// props => { title: 组件标题 }
class Header extends React.Component {
    render() {
        return (
            <div id="common-header">
                {/* onClick使用箭头函数实现返回 */}
                <span className="back-icon" onClick={() => {window.history.back()}}> 
                    <span className="icon-keyboard_arrow_left"></span>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;