import { Col, Container, Row } from "react-bootstrap";
import Bebida from "./Bebida";

const simularBebidas = [
    {
        id: 1,
        nome: 'bebida 1',
        preco: 5.99,
        imagem: 'https://tdc0wy.vteximg.com.br/arquivos/ids/163808-300-300/REFRIGERANTE-COCA-COLA-LATA-350ML-ORIGINAL.png?'
    },
    {
        id: 2,
        nome: 'bebida 2',
        preco: 5.99,
        imagem: 'https://tdc0wy.vteximg.com.br/arquivos/ids/163808-300-300/REFRIGERANTE-COCA-COLA-LATA-350ML-ORIGINAL.png?'
    }
    ,
    {
        id: 3,
        nome: 'bebida 3',
        preco: 9.99,
        imagem: 'https://tdc0wy.vteximg.com.br/arquivos/ids/163808-300-300/REFRIGERANTE-COCA-COLA-LATA-350ML-ORIGINAL.png?'
    }
]

const Bebidas = () => {
    return(
        <Container fluid>
            <Row className="mx-1 mb-2">
                {simularBebidas.map((bebida) => (
                    <Col lg={4} xl={3} key={bebida.id}>
                        <Bebida bebida={bebida} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Bebidas;