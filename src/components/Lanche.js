import { Card, Button } from "react-bootstrap";
import '../assets/Lanche.css'

const Lanche = ({ lanche }) => {
    return (
        <Card md={6} className="bg-lanche mb-3">
            <div className="d-flex">
                <Card.Img src={lanche.imagem} alt={lanche.nome} className="img-lanche" rounded />
                <Card.Body className="ms-2 me-1">
                    <Card.Title className="fs-4">{lanche.nome}</Card.Title>
                    <Card.Text className="text-lanche">{lanche.descricao}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold fs-5">R$ {lanche.preco.toFixed(2).replace('.', ',')}</span>
                        <Button className="bg-btn-custom d-flex align-items-center">
                            <i class="bi bi-cart4"></i>
                        </Button>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Lanche;
