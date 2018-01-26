// components - Category - index.js
// 轮播图

import React from 'react';

import './style.less';

// 实现轮播图的库
import ReactSwipe from 'react-swipe';

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            swipeIndex: 0,  // 轮播图索引
        };
    }

    render() {
        const options = {
            auto: 2400, // 轮播图自动滚动间隔
            continuous: true,   // 尾首相接连续滚动
            callback: (index) => {  // 每次滚动后执行的回调函数
                this.setState({
                    swipeIndex: index,
                });
            },
        };

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={options}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left jingdian">景点</li>
                            <li className="float-left ktv">KTV</li>
                            <li className="float-left gouwu">购物</li>
                            <li className="float-left shenghuofuwu">生活服务</li>
                            <li className="float-left jianshenyundong">健身运动</li>
                            <li className="float-left meifa">美发</li>
                            <li className="float-left qinzi">亲子</li>
                            <li className="float-left xiaochikuaican">小吃快餐</li>
                            <li className="float-left zizhucan">自助餐</li>
                            <li className="float-left jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left meishi">美食</li>
                            <li className="float-left dianying">电影</li>
                            <li className="float-left jiudian">酒店</li>
                            <li className="float-left xuixianyule">休闲娱乐</li>
                            <li className="float-left waimai">外卖</li>
                            <li className="float-left huoguo">火锅</li>
                            <li className="float-left liren">丽人</li>
                            <li className="float-left dujiachuxing">度假出行</li>
                            <li className="float-left zuliaoanmo">足疗按摩</li>
                            <li className="float-left zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left ribencai">日本菜</li>
                            <li className="float-left SPA">SPA</li>
                            <li className="float-left jiehun">结婚</li>
                            <li className="float-left xuexipeixun">学习培训</li>
                            <li className="float-left xican">西餐</li>
                            <li className="float-left huochejipiao">火车机票</li>
                            <li className="float-left shaokao">烧烤</li>
                            <li className="float-left jiazhuang">家装</li>
                            <li className="float-left chongwu">宠物</li>
                            <li className="float-left quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="swipe-index-container">
                    <ul>
                        {/* 注意这里确定是否选中的处理方式 */}
                        <li className={this.state.swipeIndex === 0 ? "selected" : ""}></li>
                        <li className={this.state.swipeIndex === 1 ? "selected" : ""}></li>
                        <li className={this.state.swipeIndex === 2 ? "selected" : ""}></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;