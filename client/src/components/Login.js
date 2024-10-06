import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import '../assets/RegisterLogin.css'

const Login = () => {

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
            localStorage.setItem('token', data.token);
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
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
        </Container>
    );
}

export default Login;