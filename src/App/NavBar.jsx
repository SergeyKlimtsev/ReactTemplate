import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = props =>
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">lil React</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Nav navbar>
            <NavItem href="/users">
                Users
            </NavItem>
        </Nav>
    </Navbar>;

export default NavBar;