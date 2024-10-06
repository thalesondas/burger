import { Button, Container, Form } from "react-bootstrap";
import '../assets/RegisterLogin.css'

const Login = () => {
    return (
        <Container className="d-flex flex-column align-items-center">
            <h2 className="my-5 custom-font">Entrar na conta</h2>
            <Form className="w-25">
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Digite o seu email." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <div className="mt-4 d-flex justify-content-center align-items-start">
                    <Button className="mt-3 register-login-btn" type="submit">
                        Entrar
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;