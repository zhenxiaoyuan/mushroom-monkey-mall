// index.js

// react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import App from './router';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// styles
import './styles/css/common.less';
import './styles/css/font.css'; // icon from icomoon

ReactDOM.render(
    // 用Provider将页面包起来，从而可使用redux
    <Provider store={configureStore()}>
        {/* router在App中 */}
        <App /> 
    </Provider>,
    document.getElementById("root")
);

