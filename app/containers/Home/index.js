// Home - index.js

import React from 'react';

import { CITY_NAME } from '../../localData/localStorageKey';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            initDone: false,
        };
    }

    render() {
        return (
            <div>
                <p>container-Home</p>
                {
                    this.state.initDone
                    ? localStorage.getItem(CITY_NAME)
                    : "Loading..."
                }
            </div>
        );
    }

    componentDidMount() {
        if (localStorage.getItem(CITY_NAME) == null) {
            localStorage.setItem(CITY_NAME, "北京");
        }

        setTimeout(() => {
            this.setState({
                initDone: true,
            })
        }, 1000);
    }
}

export default Home;