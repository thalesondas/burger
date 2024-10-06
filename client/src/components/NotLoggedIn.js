import { Button, Col, Row } from "react-bootstrap";
import '../assets/LoggedBox.css'

const NotLoggedIn = () => {
    return(
        <Row className="ps-4 w-100 d-flex justify-content-around">
            <Col className="col-auto d-flex flex-row align-items-center">
                <span>Você não está conectado</span>
                <Button className="btn-footer ms-2 py-1 px-2">Entrar</Button>
            </Col>
            <Col className="col-auto d-flex flex-row align-items-center">
                <span>Não tem uma conta?</span>
                <Button className="btn-footer ms-2 py-1 px-2">Criar Conta</Button>
            </Col>
        </Row>
    )
}

export default NotLoggedIn;