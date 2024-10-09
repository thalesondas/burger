import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Drink from "./Drink";

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDrinks = async () => {
            try{
                const resp = await fetch('https://rocknrollburger-server.vercel.app/api/menu');
                const data = await resp.json();
                const justDrinks = data.filter(item => item.type === 'drink');
                setDrinks(justDrinks);
            } catch (err){
                console.log(err);
            } finally{
                setLoading(false);
            }
        };

        fetchDrinks();
    }, []);

    return (
        <Container fluid>
            { loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '120px' }}>
                    <Spinner animation="border" variant="light" />
                </div>
            ) : (
                <Row className="mx-1 mb-2">
                    {drinks.map((drink) => (
                        <Col lg={4} xl={3} key={drink._id}>
                            <Drink drink={drink} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Drinks;