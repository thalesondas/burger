import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { abrirModal, fecharModal } from '../redux/modalSlice';
import { useDispatch } from 'react-redux';

const CustomModal = () => {

    const modal = useSelector(state => state.modal);
    const dispatch = useDispatch();

    return(
        <>
            <Modal show={modal.estaAberto} onHide={() => dispatch(abrirModal())}>
                <Modal.Header>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="secondary" size="sm" onClick={() => dispatch(fecharModal())}>
                        Fechar
                    </Button>
                    <Button variant="success" size="sm" onClick={() => dispatch(fecharModal())}>
                        Enviar Pedido
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomModal;