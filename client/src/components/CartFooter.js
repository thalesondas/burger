import { Col, Row, Navbar, Nav, Container } from 'react-bootstrap';
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
        <footer className='py-1 fixed-bottom'>
            <Row className='d-flex align-items-center justify-content-between w-100'>
                <Col xs={7} sm={5} md={5} className='d-flex justify-content-center'>
                    <Navbar expand="md">
                        <Container fluid className='d-flex justify-content-center'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className='ms-5 d-flex flex-column'>
                                    {isLoggedIn ? (
                                        <LoggedIn />
                                    ) : (
                                        <NotLoggedIn />
                                    )}
                                    <div className='d-md-none d-flex flex-row justify-content-evenly'>
                                        <Nav.Link href="#"><i className="bi bi-facebook fs-3"></i></Nav.Link>
                                        <Nav.Link href="#"><i className="bi bi-instagram fs-3"></i></Nav.Link>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>

                <Col xs={5} sm={7} md={5} className='d-flex justify-content-start justify-content-md-start'>
                    <span className='cursor-pointer d-flex' onClick={() => dispatch(openModal())}>
                        <span className='fs-5 me-2 ps-0 ps-md-5'>Carrinho</span>
                        <div className='position-relative'>
                            <i className="bi bi-cart4 fs-4"></i>
                            <div className='cart-qty d-flex justify-content-center align-items-center text-center position-absolute fw-bold'>
                                {cart.totalQty}
                            </div>
                        </div>
                    </span>
                </Col>

                <Col xs={0} md={2} className='d-none d-md-block justify-content-evenly'>
                    <div className='d-flex gap-5'>
                        <Nav.Link href="#"><i className="bi bi-facebook fs-3"></i></Nav.Link>
                        <Nav.Link href="#"><i className="bi bi-instagram fs-3"></i></Nav.Link>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}

export default CartFooter;