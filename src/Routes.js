import React, { Component } from "react";
import {BrowserRouter, Router, Switch, Route } from "react-router-dom";
import SignUp from './Signup.js';
import Login from './login.js';
import PrimarySearchAppBar from './Appbar.js';
import FeedPage from './feed.js';
import history from './history';
import Realprofile from "./Realprof.js";
import Flip from "./Flipcard.js";

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter history={history} forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={SignUp} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Feed" component={FeedPage} />
                    <Route path="/Create_trees"  component={Flip} />
                    <Route path="/profile" component={Realprofile}/>
                </Switch>
            </BrowserRouter>
        )
    }
}