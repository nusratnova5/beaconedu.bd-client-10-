import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider';
import img from './beacon.png.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Nav className='d-flex gap-3'>
                            <div>
                                <img src={img} alt='' height={60} width={80}></img>
                            </div>
                            <div>
                                <Navbar.Brand href="" className='fs-1 fw-bold'> BeaconEdu.bd</Navbar.Brand>
                            </div>
                        </Nav>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className='me-auto'>
                            </Nav>

                            <Nav className="d-flex flex-row justify-content-end">
                                <div className='d-flex flex-row justify-content-end'>
                                    <Nav.Link href='/'>Home</Nav.Link>
                                    <Nav.Link href='/course'>Course</Nav.Link>
                                    <Nav.Link href='/blog'>Blog</Nav.Link>
                                    {
                                        user?.uid ?
                                            <>
                                                <Button onClick={logOut} variant="secondary">Log out</Button>
                                            </>
                                            :
                                            <>
                                                <Nav.Link href='/register'><Button variant="secondary" >Register</Button></Nav.Link>
                                                <Nav.Link href='/login'><Button variant="secondary" >Login</Button></Nav.Link>
                                            </>
                                    }
                                    {/*<span className='bg-light'>{user?.uid}</span>*/}

                                    {user?.photoURL ?
                                        <>

                                            <OverlayTrigger
                                                key={'top'}
                                                placement={'bottom'}
                                                overlay={
                                                    <Tooltip id={`tooltip-${'top'}`}>
                                                        {user.displayName}
                                                    </Tooltip>
                                                }
                                            >
                                                <Button variant="bg-transparent border border-0"><Image style={{ height: '40px' }} roundedCircle src={user.photoURL} ></Image></Button>
                                            </OverlayTrigger>
                                        </>
                                        : <FaUser></FaUser>
                                    }
                                </div>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;