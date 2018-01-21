// index.js

// react
import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class HelloReact extends React.Component {

    constructor() {
        super();
        this.state = {
            initDone: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true,
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? <p>Hello, initiate is already DONE.</p>
                    : <p>Loading...</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<HelloReact />, document.getElementById("root"));

// es6
// import "./index.less";
// import component from "./component.js";

// document.body.appendChild(component());

// commonJS
// require("./index.less");
// var component = require("./component.js");

// document.body.appendChild(component());