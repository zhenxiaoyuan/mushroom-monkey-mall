// components - BuyButton - index.js
// 购买按钮

import React from 'react';

import './style.less';

class BuyButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => {this.props.buyFunction()}}>购买</button>
            </div>
        );
    }
}

export default BuyButton;