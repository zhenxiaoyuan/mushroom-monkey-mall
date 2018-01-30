// components - LoginInput - index.js
// 登陆输入框

import React from 'react';

import './style.less';

class LoginInput extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        };
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <span className="icon-mobile float-left"></span>
                    <input
                        type="text"
                        placeholder="请输入手机号"
                        value={this.state.userName}
                        onChange={(event) => { this.setState({ userName: event.target.value }) }}
                    />
                </div>
                <div className="input-container password-container">
                    <span className="icon-key float-left"></span>
                    <button>发送验证码</button>
                    <input
                        type="text"
                        placeholder="请输入验证码"
                        value={this.state.password}
                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                    />
                </div>
                <button className="btn-login" onClick={this.onClickHandle.bind(this)}>登陆</button>
            </div>
        );
    }

    // 点击登陆函数
    onClickHandle() {
        const loginUser = this.props.loginUserFunction;

        // 将输入的用户名返回父组件
        loginUser(this.state.userName);
    }
}

export default LoginInput;