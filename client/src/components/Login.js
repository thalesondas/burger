import { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { setAlert } from "../redux/alertSlice";
import { useNavigate } from "react-router-dom";
import '../assets/RegisterLogin.css'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
            const resp = await fetch('https://rocknrollburger-server.vercel.app/api/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })

            if(!resp.ok){
                const data = await resp.json();
                throw new Error(data.error || 'Erro desconhecido');
            }

            const data = await resp.json();
            dispatch(setAlert({ message: 'Login bem-sucedido', variant: 'success' }));
            setFormData({ email: '', password: '' });
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            dispatch(login());
            navigate('/');

        } catch(error){
            dispatch(setAlert({ message: error.message, variant: 'danger' }));
        }
    };

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
                            Entrar
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