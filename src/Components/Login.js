import { GithubAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {
    const { logIn,githubLogIn } = useContext(AuthContext);
    const githubProvider= new GithubAuthProvider()
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
            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleGithubLogIn=()=>{
       githubLogIn(githubProvider)
       .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.error(error);
    })
    }

    return (
        <Container className="width:50px">
            <div className=''>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <p>New to thid website!<Link to='/register'>Register</Link></p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='gap-3'>
                <Button onClick={handleGithubLogIn}>Login with Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;