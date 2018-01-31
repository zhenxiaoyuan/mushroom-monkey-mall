// containers - User - index.js
// 用户页

import React from 'react';

// redux
import { connect } from 'react-redux';

// components
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import Orders from './subpages/Orders';

class User extends React.Component {
    render() {
        return (
            <div>
                {/* 页头 */}
                <Header title="用户中心" backRouter="/" />

                {/* 用户信息 */}
                <UserInfo userinfo={this.props.userinfo} />

                {/* 订单列表 */}
                <Orders />
            </div>
        );
    }
}

// -------------redux-------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    }
}

export default connect(
    mapStateToProps,
)(User);