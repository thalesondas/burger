import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../assets/RegisterLogin.css'

const Register = () => {
    return (
        <Container className="d-flex flex-column align-items-center">
            <h2 className="my-5 custom-font">Registrar conta</h2>
            <Form>
                <Row className="gap-3">
                    <Col className="register-width">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Coloque seu nome" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite o seu email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu CPF" />
                        </Form.Group>
                    </Col>
                    <Col className="register-width">
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formRepeatPassword">
                            <Form.Label>Repita sua senha</Form.Label>
                            <Form.Control type="password" placeholder="Repita sua senha" />
                        </Form.Group>
                        
                        <div className="mt-4 d-flex justify-content-center align-items-start">
                            <Button className="mt-3 register-login-btn" type="submit">
                                Cadastrar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Register;