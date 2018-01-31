// components - FavouriteButton - index.js
// 收藏按钮

import React from 'react';

import './style.less';

class FavouriteButton extends React.Component {
    render() {
        return (
            <div className="favourite-container float-left">
                {
                    this.props.isFavourite
                    ? <button className="selected" onClick={() => {this.props.favouriteFunction()}}>已收藏</button>
                    : <button onClick={() => {this.props.favouriteFunction()}}>收藏</button>
                 }
            </div>
        );
    }
}

export default FavouriteButton;