import { Col, Row } from 'react-bootstrap';
import { openModal } from '../redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import '../assets/CartFooter.css'

const CartFooter = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return(
        <footer className='py-2 fixed-bottom'>
            <Row className='d-flex align-items-center justify-content-center w-100'>
                <Col xs={6} className='d-flex justify-content-center'>
                    <NotLoggedIn />
                </Col>

                <Col xs={3} className='d-flex justify-content-start align-items-center'>
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

                <Col xs={3} className='d-flex justify-content-center'>
                    <div></div>
                </Col>
            </Row>
        </footer>
    )
}

export default CartFooter;