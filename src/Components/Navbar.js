import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
            <img
                    alt=""
                    src="https://static.crozdesk.com/web_app_library/providers/logos/000/003/155/original/chatbots-builder-1559230712-logo.png?1559230712"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Wise Bots
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mail us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Call Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Visit us</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    </div>
  );
}

export default NavBar;
