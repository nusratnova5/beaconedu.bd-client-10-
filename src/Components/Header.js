import React, { useContext } from 'react';
import { Button,Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser, } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider';


const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                   
                    <Navbar.Brand href=""> <img src='../../src/components/beacon.png.png'height={30} width={40}/>BeaconEdu.bd</Navbar.Brand>
                    <Nav className="justify-content-end gap-3">
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