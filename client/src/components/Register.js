import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../assets/RegisterLogin.css'

const Register = () => {

    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        cpf: '',
        password: '',
        repeatPassword: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [navigate, isLoggedIn]);

    const handleChange = (ev) =>{
        setFormData({
            ...formData,
            [ev.target.name]: ev.target.value
        });
    }

    const handleRegisterUser = async(ev) =>{

        ev.preventDefault();
        setError(null);
        setSuccess(null);

        if(formData.password !== formData.repeatPassword){
            setError("As senhas estão diferentes");
            return;
        }

        try{
            const resp = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    cpf: formData.cpf,
                    password: formData.password
                })
            })

            const result = await resp.json();

            if(resp.ok){
                setSuccess('Usuário criado com sucesso');
                setFormData({ username: '', email: '', cpf: '', password: '', repeatPassword: '' });
                navigate('/login');
            } else {
                setError(result.error || 'Erro ao criar usuário');
            }

        } catch(error){
            setError("Erro ao enviar a requisição: " + error);
        }

        

    }

    return (
        <Container className="d-flex flex-column align-items-center">
            <h2 className="my-5 custom-font">Criar conta</h2>
            <Form onSubmit={handleRegisterUser}>
                <Row className="gap-3">
                    <Col className="register-width">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Coloque seu nome" name="username" value={formData.username} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite o seu email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu CPF" name="cpf" value={formData.cpf} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col className="register-width">
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" name="password" value={formData.password} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formRepeatPassword">
                            <Form.Label>Repita sua senha</Form.Label>
                            <Form.Control type="password" placeholder="Repita sua senha" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} />
                        </Form.Group>
                        
                        <div className="mt-4 d-flex justify-content-center align-items-start">
                            <Button className="mt-3 register-login-btn" onClick={handleRegisterUser} type="submit">
                                Criar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
            {error && <p className="text-danger mt-3">{error}</p>}
            {success && <p className="text-success mt-3">{success}</p>}

            <div className="mt-4 d-flex justify-content-center">
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Voltar ao Menu Principal
                </Button>
            </div>
        </Container>
    );
}

export default Register;