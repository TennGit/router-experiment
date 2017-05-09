import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route} from 'react-router-dom';
import StoreCom from './components/StoreCom';
import BlogCom from './components/BlogCom';

const App = (props) => (
    <div className="App">
        <div className="App-header">
            <h2>{props.hasError ? 'has error' : 'has no error'}</h2>
            <h2>{props.title}</h2>
            <Link to={'/store'}>Store</Link>{' '}
            <Link to={'/blog'}>Blog</Link>
            <Route exact path='/store' component={StoreCom}/>
            <Route exact path='/blog' component={BlogCom}/>
            <Route exact path='/blog/:blogId' component={BlogCom}/>
        </div>
    </div>
)

export default App;
