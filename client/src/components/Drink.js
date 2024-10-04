import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
import '../assets/Drink.css'

const Drink = ({ drink }) => {

    const dispatch = useDispatch();

    return(
        <Card className="bg-drink mb-4">
            <div className="d-flex">
                <Card.Img src={drink.imageUrl} alt={drink.name} className="img-drink my-2" rounded />
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <Card.Title className="custom-font fs-4">{drink.name}</Card.Title>
                    <span className="fw-bold fs-5">R$ {drink.price.toFixed(2).replace('.', ',')}</span>
                    <Button className="bg-btn-drink d-flex align-items-center" onClick={() => dispatch(addCartItem(drink))}>
                        <i className="bi bi-plus-square"></i>
                    </Button>
                </Card.Body>
            </div>
        </Card>
    )
}

export default Drink;