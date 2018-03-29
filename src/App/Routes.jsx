import React from 'react';
import Home from '../components/Home/Home.jsx'
import Users from '../components/Users/Users.jsx'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


const routes = props =>
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={Users}/>
        </div>
    </Router>;

export default routes;