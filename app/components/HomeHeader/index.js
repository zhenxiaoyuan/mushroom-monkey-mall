import React from 'react';

import './style.less';

class HomeHeader extends React.Component {
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
        <span className="icon-keyboard_arrow_down"></span>
                </div>

                <div className="home-header-right float-right">
                    <span className="icon-user"></span>
                </div>

                <div className="home-header-middle float-left">
                    <div className="search-container">
                        <span className="icon-search"></span>
                        <input type="text" placeholder="Please input the keywords" />
                    </div>
                </div>
            </div>
        );
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
