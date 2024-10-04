import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Lanche from "./Lanche";

const Cardapio = () => {

    const [lanches, setLanches] = useState([]);

    useEffect(() => {
        fetch('https://rocknrollburger-server.vercel.app/api/menu')
            .then(resp => resp.json())
            .then(resp => resp.filter(item => item.type === 'lanche'))
            .then(apenasLanches => setLanches(apenasLanches))
            .catch(err => console.log(err));
    }, [])

    return(
        <Container fluid>
            <Row className="mx-1">
                {lanches.map((lanche) => (
                    <Col md={6} key={lanche._id}>
                        <Lanche lanche={lanche} />
                    </Col>
                ))}
            </Row>
      </Container>
    )
}

export default Cardapio;