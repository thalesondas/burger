import { openModal } from '../redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/CartFooter.css'

const CartFooter = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return(
        <footer className='pb-1 pt-3 d-flex align-items-center justify-content-center fixed-bottom w-100'>
            <span className='cursor-pointer d-flex' onClick={() => dispatch(openModal())}>
                <span className='fs-5 me-2'>Carrinho</span>
                <div className='position-relative'>
                    <i className="bi bi-cart4 fs-4"></i>
                    <div className='cart-qty d-flex justify-content-center align-items-center text-center position-absolute fw-bold'>{cart.totalQty}</div>
                </div>
            </span>
        </footer>
    )
}

export default CartFooter;