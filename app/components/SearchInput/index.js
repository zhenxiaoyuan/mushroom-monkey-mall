// components - SearchInput - index.js
// 搜索栏输入组件

import React from 'react';

import './style.less';

class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
        }
    }

    render() {
        return (
            <input 
                    className="search-input" 
                    type="text" 
                    placeholder="请输入关键字" 
                    value={this.state.inputValue} 
                    onChange={(event) => {this.setState({inputValue: event.target.value})}}
                    onKeyUp={this.keyUpHandle.bind(this)} 
            />
        );
    }

    // 点击后键盘弹起后的操作
    keyUpHandle(event) {
        const enterHandle = this.props.enterHandleFunction;
        if (event.keyCode !== 13) {return} // 13即回车
        enterHandle(event.target.value);
    }
}

export default SearchInput;