// containers - Detail - subpages - Info.js
// 显示详情信息的子组件

import React from 'react';

// fetch
import { getInfoData } from '../../../fetch/Detail';

// components
import DetailInfo from '../../../components/DetailInfo';

class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            // 注意这里的false
            info: false,
        };
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo info={this.state.info} />
                    : "加载中..."
                }
                
            </div>
        );
    }

    componentDidMount() {
        this.loadInfoData();
    }

    // 加载详情信息
    loadInfoData() {
        const id = this.props.id;
        const result = getInfoData(id);

        result.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                info: json,
            });
        });
    }
}

export default Info;