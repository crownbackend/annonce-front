import { Container, Form, Button, Col } from "react-bootstrap";
import React from 'react';
import UserApi from "../services/UserApi";

function Register() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('firstName', firstName);
        data.append('lastName', lastName);
        data.append('email', email);
        data.append('plainPassword', password);
        UserApi.getAPIServiceInstance().register(data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return(
        <Container>
            <br/>
            <h1>Formulaire d'inscription</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                      required
                                      type="text"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)}
                                      required
                                      type="text"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </div>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type="email" placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Entrer une adresse mail valide, vous aller recevoir un mail pour confirmer votre compte.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </Container>
    )
}



export default Register;
