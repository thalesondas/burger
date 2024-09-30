import { Card, Button } from "react-bootstrap";
import '../assets/Lanche.css'
import { useDispatch } from "react-redux";
import { addItemCarrinho } from "../redux/carrinhoSlice";

const Lanche = ({ lanche }) => {

    const dispatch = useDispatch();

    return (
        <Card md={6} className="bg-lanche mb-3">
            <div className="d-flex">
                <Card.Img src={lanche.imagemUrl} alt={lanche.nome} className="img-lanche" rounded />
                <Card.Body className="ms-2 me-1">
                    <Card.Title className="fs-4">{lanche.nome}</Card.Title>
                    <Card.Text className="text-lanche">{lanche.descricao}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold fs-5">R$ {lanche.preco.toFixed(2).replace('.', ',')}</span>
                        <Button className="bg-btn-lanche d-flex align-items-center" onClick={() => dispatch(addItemCarrinho(lanche))}>
                            <i className="bi bi-plus-square"></i>
                        </Button>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Lanche;
