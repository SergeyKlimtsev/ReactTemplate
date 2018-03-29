import React from 'react';
import {Grid} from 'react-bootstrap';
import Routers from './Routes.jsx';
import NavBar from './NavBar.jsx';
import './bootstrap.css'

class Content extends React.Component {
    render() {
        return <div>
            <NavBar/>
            <Grid>
                <Routers/>
            </Grid>
        </div>
    }
}

export default Content;