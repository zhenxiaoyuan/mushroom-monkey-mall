// containers - Home - index.js
// Home - 主页面

import React from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../actions/userinfo';

import { CITY_NAME } from '../../localData/localStorageKey';

// components and subpages
import Header from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpages/Ad';
import List from './subpages/List';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* 页面头 带有搜索框 */}
                <Header cityName={this.props.userinfo.cityName}/>

                {/* 轮播图 */}
                <Category />

                <div style={{height: "15px"}}></div>

                {/* 广告部分 */}
                <Ad />

                <div style={{height: "15px"}}></div>

                {/* 产品表单 */}
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        );
    }

    componentDidMount() {
        // 为本地数据赋值
        if (localStorage.getItem(CITY_NAME) == null) {
            localStorage.setItem(CITY_NAME, "北京");
        }

        // 这里的赋值能放在更早的时候就更好了，如何解决？？？
        this.props.userinfoActions.updateCityName({
            cityName: localStorage.getItem(CITY_NAME),
        });
    }
}

// -------------redux----------------

// 负责订阅store数据已改变View显示，即subscribe
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    };
}

// 负责发出action并交由store进行reducer处理，从而更新store中的数据，即dispatch
function mapDispatchToProps(dispatch) {
    return {
        // 绑定action
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);