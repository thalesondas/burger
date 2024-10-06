import { Button, Container } from "react-bootstrap";
import '../assets/LoggedBox.css'

const LoggedIn = () => {
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <span>Olá, XXX</span>
            <Button className="btn-footer ms-3 py-1 px-2">Sair da conta</Button>
        </Container>
    )
}

export default LoggedIn;