// containers - Search - index.js
// 搜索页

import React from 'react';

import SearchHeader from '../../components/SearchHeader';

class Search extends React.Component {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                {/* 搜索页面头部 */}
                <SearchHeader keywords={params.keywords}/>
            </div>
        );
    }
}

export default Search;