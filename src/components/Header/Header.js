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
                        WebDevelopement School
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav-link'>
                        <NavLink to="/home" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Home</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/dashboard'>Dashboard</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/locations'>Blogs</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/about'>About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;