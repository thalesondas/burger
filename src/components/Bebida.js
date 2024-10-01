import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import '../assets/Bebida.css'
import { addItemCarrinho } from "../redux/carrinhoSlice";

const Bebida = ({ bebida }) => {

    const dispatch = useDispatch();

    return(
        <Card className="bg-bebida mb-4">
            <div className="d-flex">
                <Card.Img src={bebida.imagemUrl} alt={bebida.nome} className="img-bebida my-2" rounded />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title className="custom-font fs-4">{bebida.nome}</Card.Title>
                    <span className="fw-bold fs-5">R$ {bebida.preco.toFixed(2).replace('.', ',')}</span>
                    <Button className="bg-btn-bebida d-flex align-items-center" onClick={() => dispatch(addItemCarrinho(bebida))}>
                        <i className="bi bi-plus-square"></i>
                    </Button>
                </Card.Body>
            </div>
        </Card>
    )
}

export default Bebida;