import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Login = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setName(e.target.name.value);
        props.setIsLogged(true);
    }
    return (
        <div className="ms-auto w-50">
            <Form className="d-flex flex-row ms-auto" onSubmit={handleSubmit}>
                <Form.Control name="name" type="text" placeholder="Name"/>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

const Logout = (props) => {
    return (
        <div className="d-flex flex-row ms-auto">
            <Nav.Link>Name: {props.name} </Nav.Link>
            <Button onClick={() => props.setIsLogged(false)}>Logout</Button>
        </div>
    )
}

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
                    <Nav.Link onClick = {props.handleShow} className="ms-auto">About </Nav.Link>
                    {!isLogged ? (<Login setName={setName} setIsLogged={setIsLogged}/>) : (<Logout name={name} setIsLogged={setIsLogged}/>)}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header