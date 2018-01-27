// components - CityList - index.js

import React from 'react';

import './style.less';

class CityList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={() => this.props.changeCityFunction("北京")}>北京</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("上海")}>上海</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("杭州")}>杭州</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("广州")}>广州</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("沈阳")}>沈阳</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("深圳")}>深圳</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("南京")}>南京</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("天津")}>天津</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("重庆")}>重庆</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("厦门")}>厦门</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("武汉")}>武汉</span>
                    </li>
                    <li>
                        <span onClick={() => this.props.changeCityFunction("西安")}>西安</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CityList;