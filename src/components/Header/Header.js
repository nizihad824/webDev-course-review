import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="secondary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="" className="fw-bold fs-lg" style={{ fontFamily: 'cursive' }}>
                        WebDevelopement Course
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav-link ms-auto '>
                        <NavLink to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} >HOME</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/dashboard'>DASHBOARD</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/blogs'>BLOGS</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/about'>ABOUT</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;