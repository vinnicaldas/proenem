import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './view/Login';
import Home from './view/Home';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory} from 'react-router'; 


function validaAutenticacao(){
    if(localStorage.getItem('token') === null){
        browserHistory.push('/');     
    }
}

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Login}></Route>
            <Route path="/home" component={Home} onEnter={validaAutenticacao.bind(this)}></Route>
        </Router>
    ), 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
