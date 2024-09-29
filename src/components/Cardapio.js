import { Col, Container, Row } from "react-bootstrap";
import Lanche from "./Lanche";

const simulacaoCardapio = [
    {
        id: 1,
        nome: 'Hamburguer 1',
        descricao: 'Um suculento hambúrguer grelhado, coberto com queijo derretido e crocantes fatias de bacon defumado. Servido em um pão macio, com alface fresquinha, tomate suculento e um molho especial que realça todos os sabores. Uma explosão de sabor a cada mordida!',
        preco: 27.90,
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/big-mac-original5-e1469131439850.jpeg?quality=70&strip=info'
    },
    {
        id: 2,
        nome: 'Hamburguer 2',
        descricao: 'lorem ipsum 2 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6',
        preco: 35.90,
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/big-mac-original5-e1469131439850.jpeg?quality=70&strip=info'
    },
    {
        id: 3,
        nome: 'Hamburguer 3',
        descricao: 'lorem ipsum 3 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6',
        preco: 33.90,
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/big-mac-original5-e1469131439850.jpeg?quality=70&strip=info'
    },
    {
        id: 4,
        nome: 'Hamburguer 4',
        descricao: 'lorem ipsum 4 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6',
        preco: 39.90,
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/big-mac-original5-e1469131439850.jpeg?quality=70&strip=info'
    },
    {
        id: 5,
        nome: 'Hamburguer 5',
        descricao: 'lorem ipsum 5 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6',
        preco: 29.90,
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/big-mac-original5-e1469131439850.jpeg?quality=70&strip=info'
    },
    {
        id: 6,
        nome: 'Hamburguer 6',
        descricao: 'lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6 lorem ipsum 6',
        preco: 31.90,
        imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/big-mac-original5-e1469131439850.jpeg?quality=70&strip=info'
    }
]

const Cardapio = () => {
    return(
        <Container fluid>
            <Row className="mx-1">
                {simulacaoCardapio.map((lanche) => (
                    <Col md={6} key={lanche.id}>
                        <Lanche lanche={lanche} />
                    </Col>
                ))}
            </Row>
      </Container>
    )
}

export default Cardapio;