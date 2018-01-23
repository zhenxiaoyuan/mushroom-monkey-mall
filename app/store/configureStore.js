// store-configureStore

import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initState) {
    const store = createStore(rootReducer, initState);
    return store;
};