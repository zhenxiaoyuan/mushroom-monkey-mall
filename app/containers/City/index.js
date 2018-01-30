// containers - City - index.js
// City - 城市页

import React from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../actions/userinfo';

// router-history
// import createHistory from 'history/createBrowserHistory';
import history from '../../router/history';

import { CITY_NAME } from '../../localData/localStorageKey';

// components
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

class City extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {/* 通用头部组件 */}
                <Header title="选择城市" />

                {/* 显示当前城市 */}
                <CurrentCity cityName={this.props.userinfo.cityName} />

                {/* 显示城市列表 */}
                <CityList changeCityFunction={this.changeCity.bind(this)} /> 
            </div>
        );
    }

    changeCity(newCityName) {
        // 修改redux中存储的state
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCityName;
        this.props.userinfoActions.updateUserInfo(userinfo);

        // 修改localStorage中存储的值
        localStorage.setItem(CITY_NAME, newCityName);

        // 返回主页面
        history.push("/");
    }
}

// ----------redux------------

// 负责订阅store数据以改变View显示，即subscribe
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    };
}

// 负责发出action并交由store进行reducer处理，从而更新store中的数据，即dispatch
function mapDispatchToProps(dispatch) {
    return {
        // 绑定actions
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(City);