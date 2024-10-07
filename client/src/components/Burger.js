import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
import '../assets/Burger.css';

const Burger = ({ burger }) => {
    const dispatch = useDispatch();

    return (
        <Card md={6} className="bg-burger mb-3">
            <div className="d-flex flex-column flex-sm-row align-items-sm-start align-items-center">
                <Card.Img src={burger.imageUrl} alt={burger.name} className="img-burger" rounded />
                <Card.Body className="ms-2 me-1">
                    <Card.Title className="custom-font mb-3 fs-4 text-center text-sm-start">{burger.name}</Card.Title>
                    <Card.Text>{burger.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold fs-5">R$ {burger.price.toFixed(2).replace('.', ',')}</span>
                        <Button className="bg-btn-burger d-flex align-items-center" onClick={() => dispatch(addCartItem(burger))}>
                            <i className="bi bi-plus-square"></i>
                        </Button>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Burger;