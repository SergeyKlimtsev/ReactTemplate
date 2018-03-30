import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = () =>
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">lil React</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Nav navbar>
            <NavItem href="#users">
                Users
            </NavItem>
        </Nav>
    </Navbar>;

export default NavBar;