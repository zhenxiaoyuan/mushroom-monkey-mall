// container - Login - index.js
// 登录页

import React from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../actions/userinfo';

// router-history
import history from '../../router/history';

import { USER_NAME } from '../../localData/localStorageKey';

// components
import Header from '../../components/Header';
import LoginInput from '../../components/LoginInput';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isChecking: true,
        };
    }

    render() {
        return (
            <div>
                {/* 页头 */}
                <Header title="登陆" />

                {/* 登陆输入框 */}
                {
                    this.state.isChecking
                    ? <p>请稍后...</p>
                    : <LoginInput loginUserFunction={this.loginUser.bind(this)} />
                }
            </div>
        );
    }

    componentDidMount() {
        const userinfo = this.props.userinfo;

        // 用户名已在redux中，则跳转至用户页，否则显示LoginInput
        userinfo.userName
        ? history.push("/user")
        : this.setState({
            isChecking: false,
        })
    }

    loginUser(newUserName) {
        // 将新用户名存入redux中
        const userinfo = this.props.userinfo;
        userinfo.userName = newUserName;
        userinfoActions.updateUserInfo(userinfo);
        localStorage.setItem(USER_NAME, userinfo.userName);

        // 跳转回登录前的页面
        const params = this.props.match.params;
        // 注意这里要decode对URI进行解码，否则无法跳转
        params.router ? history.push(decodeURIComponent(params.router)) : history.push("/user");
    }
}

// --------------redux----------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);