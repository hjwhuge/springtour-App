import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';



import Home from '../pages/home';
import Destination from '../pages/destination';
import Find from '../pages/find';
import Member from '../pages/member';
import Mine from '../pages/mine';

import App from '../App'

export default class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/destination" component={Destination}/>
                        <Route path="/find" component={Find}/>
                        <Route path="/member" component={Member}/>
                        <Route path="/mine" component={Mine}/>
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </App>
                
            </HashRouter>
        )
    }
}


