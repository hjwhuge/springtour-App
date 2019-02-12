import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();



//全局路由
import Router from './router'

import * as serviceWorker from './serviceWorker';

import store from './store';
// console.log(store.getState());

// 引入全局变量，用来指定base_url
import global_ from './config/envconfig.js';
// console.log(global_)
// 把全局变量写入vue下
// Vue.prototype.GLOBAL = global_;
// 设置baseURL
axios.defaults.baseURL = global_.BASE_URL;

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
        
, document.getElementById('root'));

serviceWorker.unregister();