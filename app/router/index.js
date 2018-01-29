// router - index.js
// 总的Router容器

// react
import React from 'react';

// router
import {
    Router,
    Route,
    Link,
} from 'react-router-dom';
import history from './history';

// containers
import Home from '../containers/Home';
import City from '../containers/City';
import Search from '../containers/Search';
import Detail from '../containers/Detail';

const App = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/search/:category/:keywords?" component={Search}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
        </div>
    </Router>
);

export default App;