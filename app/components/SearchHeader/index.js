// components - SearchHeader - index.js
// 有搜索栏的页面头部组件

import React from 'react';

import './style.less';

// router-history
import history from '../../router/history';

// components
import SearchInput from '../SearchInput';

class SearchHeader extends React.Component {
    render() {
        return (
            <div id="search-header" className="clear-fix">
                {/* 返回按钮 点击后返回首页 */}
                <span className="back-icon float-left" onClick={() => {history.push("/")}}> 
                    <span className="icon-keyboard_arrow_left"></span>
                </span>
                {/* 搜索框 回车后继续搜索 */}
                <div className="input-container">
                    <span className="icon-search"></span>
                    &nbsp;
                    <SearchInput value={this.props.keywords || ""} enterHandleFunction={this.enterHandle.bind(this)}/>
                </div>
            </div>
        );
    }

    // 回车按钮
    enterHandle(keywords) {
        history.push("/search/all/" + encodeURIComponent(keywords));
    }
}

export default SearchHeader;