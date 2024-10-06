import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import '../assets/RegisterLogin.css'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (ev) => {
        setFormData({ ...formData,
            [ev.target.name]: ev.target.value
         });
    }

    const handleLogin = async(ev) => {

        ev.preventDefault();
        setError(null);
        setSuccess(null);

        try{
            const resp = await fetch('http://localhost:3001/api/login', {
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
                throw new Error(data.error);
            }

            const data = await resp.json();
            setSuccess("Login bem-sucedido");
            setFormData({ email: '', password: '' });
            localStorage.setItem('token', data.token);
            dispatch(login());
            navigate('/');

        } catch(error){
            setError("Error: " + error.message);
        }
    };

    return (
        <Container className="d-flex flex-column align-items-center">
            <h2 className="my-5 custom-font">Entrar na conta</h2>
            <Form onSubmit={handleLogin} className="w-25">
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
            {error && <span className="alert alert-danger">{error}</span>}
            {success && <span className="alert alert-success">{success}</span>}

            <div className="mt-5 d-flex justify-content-center">
                <Button variant="secondary" onClick={() => navigate('/')}>
                    Voltar ao Menu Principal
                </Button>
            </div>
        </Container>
    );
}

export default Login;