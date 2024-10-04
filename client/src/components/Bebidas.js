import { Col, Container, Row } from "react-bootstrap";
import Bebida from "./Bebida";
import { useEffect, useState } from "react";

const Bebidas = () => {

    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {
        fetch('https://rocknrollburger-server.vercel.app/api/menu')
            .then(resp => resp.json())
            .then(resp => resp.filter(item => item.type === 'bebida'))
            .then(apenasBebidas => setBebidas(apenasBebidas))
            .catch(err => console.log(err));
    }, [])

    return(
        <Container fluid>
            <Row className="mx-1 mb-2">
                {bebidas.map((bebida) => (
                    <Col lg={4} xl={3} key={bebida._id}>
                        <Bebida bebida={bebida} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Bebidas;