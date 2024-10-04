import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "./Burger";

const Menu = () => {

    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        fetch('https://rocknrollburger-server.vercel.app/api/menu')
            .then(resp => resp.json())
            .then(resp => resp.filter(item => item.type === 'burger'))
            .then(justBurgers => setBurgers(justBurgers))
            .catch(err => console.log(err));
    }, [])

    return(
        <Container fluid>
            <Row className="mx-1">
                {burgers.map((burger) => (
                    <Col md={6} key={burger._id}>
                        <Burger burger={burger} />
                    </Col>
                ))}
            </Row>
      </Container>
    )
}

export default Menu;