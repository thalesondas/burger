import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { login } from "../redux/authSlice";
import { setAlert } from "../redux/alertSlice";
import { useNavigate } from "react-router-dom";
import '../assets/RegisterLogin.css'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    useEffect(() => {
        if(isLoggedIn){
            navigate('/');
        }
    }, [navigate, isLoggedIn]);

    const handleChange = (ev) => {
        setFormData({ ...formData,
            [ev.target.name]: ev.target.value
         });
    }

    const handleLogin = async(ev) => {

        ev.preventDefault();

        try{
            setLoading(true);

            const resp = await axios.post('https://rocknrollburger-server.vercel.app/api/login', {
                email: formData.email,
                password: formData.password
            })

            dispatch(setAlert({ message: 'Login bem-sucedido', variant: 'success' }));
            setFormData({ email: '', password: '' });
            localStorage.setItem('token', resp.data.token);
            localStorage.setItem('username', resp.data.username);
            dispatch(login());
            navigate('/');

        } catch (error) {
            
            const errorMessage = error.response?.data?.error || 'Erro desconhecido';
            dispatch(setAlert({ message: errorMessage, variant: 'danger' }));
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container className="d-flex flex-column align-items-center">
            <h2 className="my-5 custom-font">Entrar na conta</h2>
            <Col xs={11} sm={10} md={6} lg={4}>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o seu email" name="email" value={formData.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" name="password" value={formData.password} onChange={handleChange} />
                    </Form.Group>

                    <div className="mt-4 d-flex justify-content-center align-items-start">
                        <Button className="mt-3 register-login-btn" type="submit">
                            {loading ?
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                :
                                'Entrar'
                            }
                        </Button>
                    </div>
                </Form>
            </Col>
            <div className="mt-5 d-flex justify-content-center">
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Voltar ao Menu Principal
                </Button>
            </div>
        </Container>
    );
}

export default Login;