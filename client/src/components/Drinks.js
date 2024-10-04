import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Drink from "./Drink";

const Drinks = () => {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('https://rocknrollburger-server.vercel.app/api/menu')
            .then(resp => resp.json())
            .then(resp => resp.filter(item => item.type === 'drink'))
            .then(justDrinks => setDrinks(justDrinks))
            .catch(err => console.log(err));
    }, [])

    return(
        <Container fluid>
            <Row className="mx-1 mb-2">
                {drinks.map((drink) => (
                    <Col lg={4} xl={3} key={drink._id}>
                        <Drink drink={drink} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Drinks;