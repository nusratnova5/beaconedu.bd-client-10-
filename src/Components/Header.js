import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser, } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider';
import img from './beacon.png.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <div className='d-flex gap-3'>
                        <div>
                            <img src={img} alt='' height={60} width={80}></img>
                        </div>
                        <div>
                            <Navbar.Brand href="" className='fs-1 fw-bold'> BeaconEdu.bd</Navbar.Brand>
                        </div>
                    </div>

                    <Nav className="justify-content-end gap-3 container-fluid">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/course'>Course</Nav.Link>
                        <div className=''>
                            <Nav.Link href='/register'><Button variant="secondary" >Register</Button></Nav.Link>
                        </div>
                        <div className=''>
                            <Nav.Link href='/login'><Button variant="secondary" >Login</Button></Nav.Link>
                        </div>
                        <div className='width:20px'>
                            <Button onClick={logOut} variant="secondary">Log out</Button>
                        </div>
                        <span className='bg-light'>{user?.displayName}</span>

                        {/*{user.photoURL ?
                        <Image style={{height:'40px'}} roundedCircle src={user.photoURL} ></Image>
                        :<FaUser></FaUser>
                    }*/}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;