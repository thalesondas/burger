import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/LoggedBox.css'

const NotLoggedIn = () => {
    return(
        <Row className="mt-2 mt-md-0 d-flex flex-column flex-md-row">
            <Col xs={6} className="d-flex align-items-start justify-content-start align-items-md-center justify-content-md-center">
                <Link to='/login'>
                    <Button className="btn-footer ms-2 py-1 px-2 text-nowrap">Entrar na Conta</Button>
                </Link>
            </Col>
            <Col xs={6} className="mt-2 mt-md-0 d-flex align-items-start justify-content-start align-items-md-center justify-content-md-center">
                <Link to='/register'>
                    <Button className="btn-footer ms-2 py-1 px-2 text-nowrap">Criar Conta</Button>
                </Link>
            </Col>
        </Row>
    )
}

export default NotLoggedIn;