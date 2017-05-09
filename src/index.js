/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

import * as React from 'react';
import { render } from 'react-dom';
import { createStore ,applyMiddleware} from 'redux';
import reducers from './reducers'
import axios from 'axios';
import promise from "redux-promise-middleware";
import {Provider} from "react-redux";
import Container from "./container";
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore(reducers, applyMiddleware(promise()));
// console.log(store);
store.dispatch({
    type:"FETCH_USERS",
    payload:axios.get('https://jsonplaceholder.typicode.com/posts/1')
})

render(
    <Provider store={store}>
        <Router history={Router.hashHistory}>
            <Container />
        </Router>
    </Provider>,
    document.getElementById('root')
);