// components - Header - index.js
// 通用头部组件

import React from 'react';

// router-history
import history from '../../router/history';

import './style.less';

// props => { title: 组件标题 }
class Header extends React.Component {
    render() {
        return (
            <div id="common-header">
                {/* onClick使用箭头函数实现返回 */}
                <span className="back-icon" onClick={this.onClickHandle.bind(this)}> 
                    <span className="icon-keyboard_arrow_left"></span>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }

    onClickHandle() {
        this.props.backRouter
        ? history.push(this.props.backRouter)
        : window.history.back()
    }
}

export default Header;