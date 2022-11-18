import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Header = (props) => {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ name, setName ] = useState ('');
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand>
                    <img alt="spotify-brand" src="./images/spotify-logo.png" width="30" height="30" className="d-inline-block align-top"/>
                    {' '} Spotify Playlist Generator
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick = {props.handleShow}>About </Nav.Link>
                    <Nav.Link>Name: {name}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header