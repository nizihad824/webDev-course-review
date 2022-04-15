import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar style={{backgroundColor:'#0f0826'}} variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="" className="fw-bold fs-lg" style={{ fontFamily: 'cursive' }}>
                        WebDevelopement Course
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav-link ms-auto '>
                        <NavLink to="/home">HOME</NavLink>
                        <NavLink to="/reviews"
                             >REVIEWS</NavLink>
                            <NavLink  to='/dashboard'>DASHBOARD</NavLink>
                            <NavLink to='/blogs'>BLOGS</NavLink>
                            <NavLink  to='/about'>ABOUT</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;