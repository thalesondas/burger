import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Burger from "./Burger";

const Menu = () => {
    const [burgers, setBurgers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBurgers = async() => {
            try{
                const resp = await fetch('https://rocknrollburger-server.vercel.app/api/menu');
                const data = await resp.json();
                const justBurgers = data.filter(item => item.type === 'burger');
                setBurgers(justBurgers);
            } catch (err){
                console.log(err);
            } finally{
                setLoading(false);
            }
        };

        fetchBurgers();
    }, []);

    return (
        <Container fluid>
            { loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                    <Spinner animation="border" variant="light" />
                </div>
            ) : (
                <Row className="mx-1">
                    {burgers.map((burger) => (
                        <Col md={6} key={burger._id}>
                            <Burger burger={burger} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Menu;