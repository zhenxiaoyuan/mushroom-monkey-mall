// components - HomeHeader - index.js
// Home页头，带有{ 城市名、 搜索框、 用户按钮 }

import React from 'react';

// router
import { Link } from 'react-router-dom';
import history from '../../router/history';

import './style.less';

// components
import SearchInput from '../SearchInput';

class HomeHeader extends React.Component {
    render() {
        return (
            <div id="home-header" className="clear-fix">
                {/* 城市名 */}
                <div className="home-header-left float-left">
                    <Link to="/city" style={{ textDecoration: "none" }}>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <span className="icon-keyboard_arrow_down"></span>
                    </Link>
                </div>

                {/* 搜索框 */}
                <div className="home-header-middle float-left">
                    <div className="search-container">
                        <span className="icon-search"></span>
                        <SearchInput value="" enterHandleFunction={this.enterHandle.bind(this)} />
                    </div>
                </div>

                {/* 用户按钮 */}
                <div className="home-header-right float-right">
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <span className="icon-user"></span>
                    </Link>
                </div>
            </div>
        );
    }

    // 回车操作
    enterHandle(keywords) {
        history.push("/search/all/" + encodeURIComponent(keywords));
    }
}

export default HomeHeader;

// 这里用到了props，箭头函数用了会报错
// It will wrong if you use the arrow function, because we use the props.

// const HomeHeader = () => (
//     <div id="home-header" className="clear-fix">
//         <div className="home-header-left float-left">
//             <span>{this.props.cityName}</span>
//             &nbsp;
//         <span className="icon-keyboard_arrow_down"></span>
//         </div>

//         <div className="home-header-right float-rigth">
//             <span className="icon-user"></span>
//         </div>

//         <div className="home-header-middle">
//             <div className="search-container">
//                 <span className="icon-search"></span>
//                 <input type="text" placeholder="Please input the keywords" />
//             </div>
//         </div>
//     </div>
// );
