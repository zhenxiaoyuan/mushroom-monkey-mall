// store - configureStore.js

import { createStore } from 'redux';
import rootReducer from '../reducers';

// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initState) {
    // 创建store
    const store = createStore(rootReducer, initState,
        // composeWithDevTools()
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};