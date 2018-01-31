// components - UserInfo - index.js
// 用户信息组件

import React from 'react';

import './style.less';

class UserInfo extends React.Component {
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <span className="icon-user float-left"></span>
                    &nbsp;
                    <span>{this.props.userinfo.userName}</span>
                </p>
                <p>
                    <span className="icon-location float-left"></span>
                    &nbsp;
                    <span>{this.props.userinfo.cityName}</span>
                </p>
            </div>
        );
    }
}

export default UserInfo;