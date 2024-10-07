import { Col, Row } from 'react-bootstrap';
import { openModal } from '../redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import '../assets/CartFooter.css'

const CartFooter = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return(
        <footer className='py-2 fixed-bottom'>
            <Row className='d-flex align-items-center justify-content-center w-100'>
                <Col xs={6} className='d-flex justify-content-center'>
                    {isLoggedIn ? (
                        <LoggedIn />
                    ) : (
                        <NotLoggedIn />
                    )}
                </Col>

                <Col xs={4} className='d-flex justify-content-start align-items-center'>
                    <span className='cursor-pointer d-flex' onClick={() => dispatch(openModal())}>
                        <span className='fs-5 me-2'>Carrinho</span>
                        <div className='position-relative'>
                            <i className="bi bi-cart4 fs-4"></i>
                            <div className='cart-qty d-flex justify-content-center align-items-center text-center position-absolute fw-bold'>
                                {cart.totalQty}
                            </div>
                        </div>
                    </span>
                </Col>

                <Col xs={2} className='d-flex justify-content-around'>
                    <i className="fs-3 cursor-pointer bi-facebook"></i>
                    <i className="fs-3 cursor-pointer bi-instagram"></i>
                </Col>
            </Row>
        </footer>
    )
}

export default CartFooter;