// components - LoadMore - index.js
// 加载更多

import React from 'react';

import './style.less';

class LoadMore extends React.Component {
    render() {
        return (
            // ref可获取DOM
            <div className="load-more" ref="loadMore"> 
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    // 不能再onClick中调用this.props.loadMoreFunction
                    // 大体意思就是在render这种需要props和state进行渲染的方法中，
                    // 不能再对props和state进行更新。
                    // 我的理解是，React会在props和state改变的时候调用 render进行DOM diff然后渲染，
                    // 如果在渲染过程中再对props和states进行更改，就陷入死循环了。
                    // 酷炫一点的写法就是匿名函数，如下：
                    : <span onClick={()=>this.props.loadMoreFunction()}>加载更多</span>
                    // 普通写法再这里：
                    // : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }

    componentDidMount() {
        let timeoutId;  // 处理节流
        const loadMoreDOM = this.refs.loadMore; // 获取组件DOM
        const loadMoreFunction = this.props.loadMoreFunction; // 加载更多函数

        // 监听窗口滚动的函数，监听触发后调用第二个参数中的函数
        window.addEventListener("scroll", () => {
            // 如果正在加载，则返回
            if (this.props.isLoadingMore) {
                return;
            }

            if (timeoutId) {clearTimeout(timeoutId)}
            timeoutId = setTimeout(() => {
                const loadMoreTop = loadMoreDOM.getBoundingClientRect().top;    // 获取DOM顶部位置
                const windowHeight = window.screen.height;  // 获取屏幕高度
                if (loadMoreTop && loadMoreTop < windowHeight) {
                    loadMoreFunction();
                }
            }, 100);    // 处理节流，每100毫秒一次
        })
    }
}

export default LoadMore;