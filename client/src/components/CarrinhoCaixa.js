import '../assets/CarrinhoCaixa.css'
import { abrirModal } from '../redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';

const CarrinhoCaixa = () => {

    const carrinho = useSelector(state => state.carrinho)
    const dispatch = useDispatch()

    return(
        <footer className='pb-1 pt-3 d-flex align-items-center justify-content-center fixed-bottom w-100'>
            <span className='cursor-pointer d-flex' onClick={() => dispatch(abrirModal())}>
                <span className='fs-5 me-2'>Carrinho</span>
                <div className='position-relative'>
                    <i className="bi bi-cart4 fs-4"></i>
                    <div className='carrinho-qtde d-flex justify-content-center align-items-center text-center position-absolute fw-bold'>{carrinho.qtdeTotal}</div>
                </div>
            </span>
        </footer>
    )
}

export default CarrinhoCaixa;