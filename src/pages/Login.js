import { Container, Form, Button, Col } from "react-bootstrap";
import React, { useState } from 'react';
import SecurityApi from "../services/SecurityApi";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            username: email,
            password: password,
        }
        SecurityApi.getAPIServiceInstance().login(data)
            .then(res => res.json())
            .then((response) => {
                window.localStorage.setItem('token', JSON.stringify(response.token));
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <br/>
            <h1>Connexion</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </Form>
        </Container>
    )
}

export default Login
