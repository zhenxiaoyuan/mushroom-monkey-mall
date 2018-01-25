// containers-Home-subpage-List.js

import React from 'react';

import { getListData } from '../../../fetch/Home';

import HomeList from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            listData: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1,
        };
    }

    render() {
        return (
            <div>
                <HomeList data={this.state.listData} />

                <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFunction={this.loadMoreData.bind(this)}/>
            </div>
        );
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);

        this.resultHandle(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true,
        });

        const cityName = this.props.cityName;
        const result = getListData(cityName, this.state.page);

        this.resultHandle(result);

        this.setState({
            isLoadingMore: false,
            page: this.state.page + 1,
        })
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const data = json;
            if (data.data.length) { // 这里要用data.data.length，对象是没有length的。
                this.setState({
                    listData: this.state.listData.concat(data.data),
                    hasMore: data.hasMore,
                    // isLoadingMore: false,
                    // page: this.state.page + 1, // 不能在这里+1，否则会之行在getListData之前。
                });
            }
        });
    }
}

export default List;