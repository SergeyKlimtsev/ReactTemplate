import React from 'react';
import Home from '../components/Home/Home.jsx'
import Users from '../components/Users/Users.jsx'
import User from '../components/User/User.jsx'
import {
    HashRouter  as Router,
    Route
} from 'react-router-dom'


const routes = () =>
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={Users}/>
            <Route path="/user/:id" component={User}/>
        </div>
    </Router>;

export default routes;