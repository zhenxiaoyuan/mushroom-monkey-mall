// Home - index.js

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../actions/userinfo';

import { CITY_NAME } from '../../localData/localStorageKey';

import Header from '../../components/HomeHeader';
import Category from '../../components/HomeCategory';
import Ad from './subpage/Ad';
import List from './subpage/List';

// class CityName extends React.Component {
//     render() {
//         return (
//             <p>{this.props.userinfo.cityName}</p>
//         );
//     }
// }

// class CityNameUpdateButton extends React.Component {
//     render() {
//         return (
//             <button onClick={this.updateCityNameOnClick.bind(this)}>UpdateCityName</button>
//         );
//     }

//     updateCityNameOnClick() {
//         const actions = this.props.actions;
//         actions.updateCityName({
//             cityName: "Shenyang",
//         });
//     }
// }

class Home extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     initDone: false,
        // };
    }

    render() {
        return (
            <div>
                <Header cityName={this.props.userinfo.cityName}/>

                <Category />

                <div style={{height: "15px"}}></div>

                <Ad />

                <div style={{height: "15px"}}></div>

                <List cityName={this.props.userinfo.cityName}/>

                {/* <hr />

                <p>container-Home</p>
                <CityName userinfo={this.props.userinfo}/>
                <CityNameUpdateButton actions={this.props.userinfoActions}/>
                
                <hr /> */}

                {/* {
                    this.state.initDone
                        ? localStorage.getItem(CITY_NAME)
                        : "Loading..."
                } */}
            </div>
        );
    }

    componentDidMount() {
        if (localStorage.getItem(CITY_NAME) == null) {
            localStorage.setItem(CITY_NAME, "北京");
        }

        this.props.userinfoActions.updateCityName({
            // cityName: "Shanghai",
            cityName: localStorage.getItem(CITY_NAME),
        });

        // setTimeout(() => {
        //     this.setState({
        //         initDone: true,
        //     });
        // }, 1000);
    }
}

// -------------redux----------------

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
)(Home);