// containers-Home-subpage-List.js
// 主页列表子页面

import React from 'react';

import { getListData } from '../../../fetch/Home';
import { CITY_NAME } from '../../../localData/localStorageKey';

import HomeList from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

// 初始化一个组件的 state
const initState = {
    listData: [],   // 存放服务器返回的表单数据
    hasMore: false, // 是否有下一页内容可供加载
    isLoadingMore: false,   // 是否正在加载更多数据
    page: 1,    // 可加载的表单页数，第0页已默认加载，故初始化为1
};

class List extends React.Component {
    constructor() {
        super();
        this.state = initState;
    }

    render() {
        return (
            <div>
                <h2 style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "10px 15px",
                    borderBottom: "1px solid #f1f1f1",
                    backgroundColor: "white",
                }}>猜你喜欢</h2>
                
                {/* 表单数据 */}
                <HomeList data={this.state.listData} />

                {/* 加载更多 */}
                <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFunction={this.loadMoreData.bind(this)} />
            </div >
        );
    }

    componentDidMount() {
        // 挂载成功后加载第一页数据
        this.loadFirstPageData();
    }

    // 加载第一页数据
    loadFirstPageData() {
        // 页面第一次加载时，需将本地数据赋值给cityName，因为此时redux中的置尚未加载成功
        const cityName = this.props.cityName;
        // (
        //     this.props.cityName == null
        //         ? localStorage.getItem(CITY_NAME)
        //         : this.props.cityName
        // );
        // 向服务器发出请求获取表单数据
        const result = getListData(cityName, 0);

        // 处理数据
        this.resultHandle(result);
    }

    // 加载更多数据
    loadMoreData() {
        this.setState({
            isLoadingMore: true,
        });

        const cityName = this.props.cityName;
        // 向服务器发出请求获取表单数据
        const result = getListData(cityName, this.state.page);

        // 处理数据
        this.resultHandle(result);

        this.setState({
            // isLoadingMore: false,    // 不能在这里置false，否则会走在加载之前
            page: this.state.page + 1,  // 加载完成后页面值加1
        })
    }

    // 处理数据
    resultHandle(result) {
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const data = json;
            if (data.data.length) { // 这里要用data.data.length，对象是没有length的
                this.setState({
                    listData: this.state.listData.concat(data.data),    // 注意此处concat
                    hasMore: data.hasMore,
                    isLoadingMore: false,
                    // page: this.state.page + 1, // 不能在这里+1，否则会之行在getListData之前
                });
            }
        });
    }
}

export default List;