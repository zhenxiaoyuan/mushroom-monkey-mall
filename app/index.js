// index.js

// react
import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './index.less';

import Home from './containers/Home';

const App = () => (
    <Router>
        <div>
            <h2>Header</h2>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>

            <h2>Footer</h2>
        </div>
    </Router>
);

const About = () => (
    <div>
        <p>About</p>
    </div>
);

const Contact = () => (
    <div>
        <p>Contact</p>
    </div>
);

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);


// A test class
// class HelloReact extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             initDone: false,
//         };
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 initDone: true,
//             })
//         }, 1000);
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.initDone
//                     ? <p>Hello, initiate is already DONE.</p>
//                     : <p>Loading...</p>
//                 }
//             </div>
//         );
//     }
// }


// es6
// import "./index.less";
// import component from "./component.js";

// document.body.appendChild(component());

// commonJS
// require("./index.less");
// var component = require("./component.js");

// document.body.appendChild(component());