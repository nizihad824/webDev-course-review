import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="secondary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="" className="fw-bold fs-lg" style={{ fontFamily: 'cursive' }}>
                        WevDevelopement School
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav-link'>
                            <NavLink  to='/home'>Home</NavLink>
                            <NavLink 
                             to='/reviews'>Reviews</NavLink>
                            <NavLink  to='/dashboard'>Dashboard</NavLink>
                            <NavLink 
                            to='/about'>About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;