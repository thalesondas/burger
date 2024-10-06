import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import '../assets/LoggedBox.css'

const LoggedIn = () => {

    const dispatch = useDispatch();

    const handleLougOut = () => {
        localStorage.removeItem('token');
        dispatch(logout());
    }

    return(
        <Container className="d-flex justify-content-center align-items-center">
            <span>Olá, XXX</span>
            <Button onClick={handleLougOut} className="btn-footer ms-3 py-1 px-2">Sair da conta</Button>
        </Container>
    )
}

export default LoggedIn;