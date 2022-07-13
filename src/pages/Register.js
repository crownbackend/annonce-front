import { Container, Form, Button, Col } from "react-bootstrap";

function Register() {

    return(
        <Container>
            <br/>
            <h1>Formulaire d'inscription</h1>
            <br/>
            <Form>
                <div className="row">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </div>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type="email" placeholder="Mail" />
                    <Form.Text className="text-muted">
                        Entrer une adresse mail valide, vous aller recevoir un mail pour confirmer votre compte.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Register;
