import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { setAlert } from "../redux/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { cpf } from 'cpf-cnpj-validator';
import validator from 'validator';
import InputMask from 'react-input-mask';
import '../assets/RegisterLogin.css'

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        cpf: '',
        password: '',
        repeatPassword: ''
    });

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

    const validateFields = () => {
        if(formData.username.length < 3){
            dispatch(setAlert({ message: 'Nome de usuário deve ter no mínimo 3 letras', variant: 'danger' }));
            return false;
        }

        const isValidEmail = validator.isEmail(formData.email);
        if (!isValidEmail) {
            dispatch(setAlert({ message: 'Email inválido', variant: 'danger' }));
            return false;
        }

        const isValidCpf = cpf.isValid(formData.cpf);
        if (!isValidCpf) {
            dispatch(setAlert({ message: 'CPF inválido', variant: 'danger' }));
            return false;
        }
        
        if(formData.password !== formData.repeatPassword){
            dispatch(setAlert({ message: 'As senhas estão diferentes', variant: 'danger' }));
            return false;
        }

        if(formData.password.length < 8){
            dispatch(setAlert({ message: 'Senha deve ter no mínimo 8 letras', variant: 'danger' }));
            return false;
        }
        return true;
    }

    const handleRegisterUser = async(ev) =>{

        ev.preventDefault();

        const isValidFields = validateFields();
        if(!isValidFields){
            return;
        }

        try{
            await axios.post('https://rocknrollburger-server.vercel.app/api/register', {
                username: formData.username,
                email: formData.email,
                cpf: formData.cpf,
                password: formData.password
            })

            dispatch(setAlert({ message: 'Usuário criado com sucesso', variant: 'success' }));
            setFormData({ username: '', email: '', cpf: '', password: '', repeatPassword: '' });
            navigate('/login');

        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            dispatch(setAlert({ message: 'Erro ao enviar a requisição', variant: 'danger' }));
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
                            <InputMask mask="999.999.999-99" value={formData.cpf} onChange={handleChange}>
                                {() => <Form.Control type="text" placeholder="Digite seu CPF" name="cpf" />}
                            </InputMask>
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
            <div className="mt-4 d-flex justify-content-center">
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Voltar ao Menu Principal
                </Button>
            </div>
        </Container>
    );
}

export default Register;