// containers - Search - index.js
// 搜索页

import React from 'react';

// components and subpages
import SearchHeader from '../../components/SearchHeader';
import List from './subpages/List';

class Search extends React.Component {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                {/* 搜索页面头部 */}
                <SearchHeader keywords={params.keywords}/>

                {/* 搜索结果列表 */}
                <List category={params.category} keywords={params.keywords} />
            </div>
        );
    }
}

export default Search;