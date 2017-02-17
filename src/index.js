import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Firstpage from './component/Firstpage';


import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducer'

window.React = React;



const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Firstpage} />
        </Route>
    </Router>
</Provider>, document.getElementById('root'));
