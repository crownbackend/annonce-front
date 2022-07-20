import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Header(props) {
    const isLoggedIn = props.isLoggedIn;
    let login = null;
    function handleLogout() {
        localStorage.removeItem('token')
    }
    if(isLoggedIn) {
        login = <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
                Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" onClick={handleLogout}>
                Deconnexion
            </NavDropdown.Item>
        </NavDropdown>
    } else if(!isLoggedIn) {
        login = <div>
            <Link to="/connexion" className="btn btn-outline-primary me-2">Connexion</Link>
            <Link to="/inscription" className="btn btn-primary">Inscription</Link>
        </div>
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Le BonPoint</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Accueil</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {login}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
