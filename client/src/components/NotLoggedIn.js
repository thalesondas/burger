import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/LoggedBox.css'

const NotLoggedIn = () => {
    return(
        <Row className="ps-4 w-100 d-flex justify-content-around">
            <Col className="col-auto d-flex align-items-center">
                <span>Você não está conectado</span>
                <Link to='/login'>
                    <Button className="btn-footer ms-2 py-1 px-2">Entrar</Button>
                </Link>
            </Col>
            <Col className="col-auto d-flex flex-row align-items-center">
                <span>Não tem uma conta?</span>
                <Link to='/register'>
                    <Button className="btn-footer ms-2 py-1 px-2">Criar Conta</Button>
                </Link>
            </Col>
        </Row>
    )
}

export default NotLoggedIn;