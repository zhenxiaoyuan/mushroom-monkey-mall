// containers - Detail - index.js
// 商品详情页

import React from 'react';

// components and subpages
import Header from '../../components/Header';
import Info from './subpages/Info';
import Comments from './subpages/Comments';
import Buttons from './subpages/Buttons';

class Detail extends React.Component {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                {/* 页面头部 */}
                <Header title="商品详情" />

                {/* 商品信息 */}
                <Info id={params.id} />

                {/* 操作按钮 */}
                <Buttons id={params.id} />

                {/* 评价详情 */}
                <Comments id={params.id} />
            </div>
        );
    }
}

export default Detail;