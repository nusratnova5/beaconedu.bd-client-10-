import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Navbar</Navbar.Brand>
                    <Nav className="me-auto justify-between">
                        <Link to="/">Home</Link>
                        <Link to="/course">Course</Link>
                        <Link to="/login"><Button variant="secondary" >Login</Button></Link>
                        <Link to="/register"><Button variant="secondary" >Register</Button></Link>
                    <button onClick={logOut}>Log Out</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;