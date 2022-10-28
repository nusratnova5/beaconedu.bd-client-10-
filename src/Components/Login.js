import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import {  Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { FaGithubSquare,FaGooglePlusSquare } from 'react-icons/fa';


const Login = () => {
    const [error,setError]=useState('');
    const { logIn, githubLogIn, googleLogIn } = useContext(AuthContext);
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    
    const navigate = useNavigate();
    let location=useLocation();
    const from=location.state?.from?.pathname || '/';
    console.log(from);

  

    const handleSubmit = event => {
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }


    const handleGithubLogIn = () => {
        githubLogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate( from, {replace: true} );
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <>
            <p className='fs-3 fw-bold mt-5'>Please Login Here</p>
            <Container className="w-25 bg-secondary mt-3 rounded">
                <div className=''>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div className='d-flex justify-content-evenly p-3 gap-3'>
                                <div className='fw-bold'>
                                    <Form.Label>Email address</Form.Label>
                                </div>
                                <div className=''>
                                    <Form.Control type="email" name='email' placeholder="Enter Your Email" />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className='d-flex justify-content-evenly p-1 gap-4'>
                                <div className='fw-bold'>
                                    <Form.Label>Password</Form.Label>
                                </div>
                                <div className=''>
                                    <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                                </div>
                            </div>
                        </Form.Group>
                        <Button variant="info" type="submit" className='mt-3 mb-1 fw-bold text-light'>
                            Submit
                        </Button>
                        
                        <div className='text-danger mb-5'>
                        {error}
                    </div>
                    <div>
                            <p className='text-light fw-bold'>New to <span className='text-info'>BeaconEdu.bd!</span></p>
                            <Link to='/register' className='text-dark'> Be Registered Here</Link>
                        </div>
                    </Form>
                    <p className='text-light fw-bold'>Wanna Login with Github or Google?</p>
                    <div className='d-flex flex-row justify-content-evenly '>
                        <div className='gap-3 mb-3'>
                            <Button variant="light" onClick={handleGithubLogIn} className='fw-bold'><FaGithubSquare></FaGithubSquare>   Github</Button>
                        </div>
                        <div className='gap-3 mb-3 '>
                            <Button variant="light" onClick={handleGoogleLogIn} className='fw-bold'><FaGooglePlusSquare></FaGooglePlusSquare>   Google</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;