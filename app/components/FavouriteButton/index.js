// components - FavouriteButton - index.js
// 收藏按钮

import React from 'react';

import './style.less';

class FavouriteButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => {this.props.favouriteFunction()}}>
                    {
                        this.props.isFavourite
                        ? "已收藏"
                        : "收藏"
                    }
                </button>
            </div>
        );
    }
}

export default FavouriteButton;