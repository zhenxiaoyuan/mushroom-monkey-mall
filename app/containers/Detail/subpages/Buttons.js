// containers - Detail - subpages - Buttons.js
// 详情页中的按键操作

import React from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../../actions/userinfo';
import * as favouriteActions from '../../../actions/favourite';

// router-history
import history from '../../../router/history';

// components
import BuyButton from '../../../components/BuyButton';
import FavouriteButton from '../../../components/FavouriteButton';

class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            isFavourite: false,
        }
    }

    render() {
        return (
            <div className="buttons-container clear-fix">
                <BuyButton buyFunction={this.buy.bind(this)} />
                <FavouriteButton isFavourite={this.state.isFavourite} favouriteFunction={this.favourite.bind(this)} />
            </div>
        );
    }

    componentDidMount() {
        // 检测是否收藏
        this.checkFavourite();
    }

    // 收藏操作
    favourite() {
        const id = this.props.id;   // 商品id

        // 如果已登录
        // 1 - 修改redux中的id
        // 2 - 修改isFavourite
        if (this.checkLogin()) {
            this.state.isFavourite
                ? this.props.favouriteActions.remove({ id: id }) // 取消收藏
                : this.props.favouriteActions.add({ id: id }) // 添加收藏

            this.setState({
                isFavourite: !this.state.isFavourite,
            })
        }
        // 如果未登录
        // 跳转至登录页
        else {
            history.push("/login/" + encodeURIComponent("/detail/" + this.props.id)) // 未登录，跳转到登录页，并附带该页链接 
        }
    }

    // 购买操作
    buy() {
        // 检测是否已登陆
        this.checkLogin()
            ? history.push("/user") // 已登录，跳转到用户页，此处省略购买流程
            : history.push("/login/" + encodeURIComponent("/detail/" + this.props.id)) // 未登录，跳转到登录页，并附带该页链接
    }

    // 检测用户是否已登陆
    checkLogin() {
        const id = this.props.id;   // 商品id
        const userName = this.props.userinfo.userName;  // 用户姓名

        // 如果没有登陆，跳转到登陆页面
        if (!userName) {
            // history.push("/login");
            return false;
        }
        // 如果已经登陆，则返回true继续操作
        return true;
    }

    // 检测是否已收藏
    checkFavourite() {
        const id = this.props.id;
        const favourite = this.props.favourite;

        favourite.forEach((item) => {
            if (item.id === id) {
                this.setState({
                    isFavourite: true
                })
                return;
            }
        });
    }
}

// -------------redux-------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        favourite: state.favourite,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // userinfoActions: bindActionCreators(userinfoActions, dispatch),
        favouriteActions: bindActionCreators(favouriteActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Buttons);