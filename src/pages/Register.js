import { Container, Form, Button, Col } from "react-bootstrap";
import React, { useState } from 'react';
import UserApi from "../services/UserApi";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import fr from 'date-fns/locale/fr';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selected, setSelected] = React.useState(new Date());
    const navigate = useNavigate();


    const formatDate = (date) => {
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        let year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return [year, month, day].join('-');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('firstName', firstName);
        data.append('lastName', lastName);
        data.append('email', email);
        data.append('plainPassword', password);
        data.append('birthday', formatDate(selected));
        UserApi.getAPIServiceInstance().register(data)
            .then(response => {
                if(response.status === 201) {
                    navigate('/')
                }
            })
            .catch(() => {
                alert('Erreur serveur')
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
                <hr/>
                <label>Date de naissance</label>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    fromYear={1900} toYear={2025} captionLayout="dropdown"
                    locale={fr}
                />
                <hr/>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </Container>
    )
}



export default Register;
