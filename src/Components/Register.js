import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState({});
    const { createUser } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })


    }
    return (
        <Container className="w-25 bg-secondary mt-3 rounded">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className='d-flex justify-content-evenly p-3 gap-3'>
                        <div className='fw-bold'>
                            <Form.Label>Full Name</Form.Label>
                        </div>
                        <div className=''>
                            <Form.Control type="text" name='fullName' placeholder="Enter Your Name" />
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className='d-flex justify-content-evenly p-3 gap-3'>
                        <div className='fw-bold'>
                            <Form.Label>Photo URL</Form.Label>
                        </div>
                        <div className=''>
                            <Form.Control type="text" name='' placeholder="Enter Your Photo url" />
                        </div>
                    </div>
                </Form.Group>
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

                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <div className='d-flex justify-content-evenly p-3 gap-3'>
                        <div className='fw-bold'>
                            <Form.Label>Password</Form.Label>
                        </div>
                        <div className=''>
                            <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                        </div>
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-2'>
                        Submit
                </Button>
                <div className='mt-2'>
                <p className='text-light fw-bold'>Already have an account!</p>
                <Link to='/login' className='text-dark pb-3'>Login Here</Link>
                </div>
            </Form>
        </Container>
    );
};

export default Register;