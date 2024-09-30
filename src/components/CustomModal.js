import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { fecharModal } from '../redux/modalSlice';
import { limparCarrinho, removerItemCarrinho } from '../redux/carrinhoSlice';
import { useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import '../assets/CustomModal.css'

const CustomModal = () => {

    const modal = useSelector(state => state.modal);
    const carrinho = useSelector(state => state.carrinho);
    const dispatch = useDispatch();

    return(
        <>
            <Modal scrollable show={modal.estaAberto} onHide={() => dispatch(fecharModal())}>
                <Modal.Header>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {carrinho.itemsCarrinho.length > 0 ? (
                        carrinho.itemsCarrinho.map((item) => (
                            <>
                                <Row key={item._id}>
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <div className='d-flex flex-column'>
                                            <h4 className='mb-1'>{item.nome}</h4>
                                            <span className='mb-1'>Quantidade: {item.qtde}</span>
                                            <span className='mb-2'>R$ {item.precoTotal.toFixed(2).replace('.', ',')}</span>
                                        </div>
                                        <i className="delete-icon bi bi-x-square-fill fs-3" onClick={() => dispatch(removerItemCarrinho(item._id))}></i>
                                    </div>
                                    <hr/>
                                </Row>
                                <Row className='mt-2'>
                                    <span className='fw-bold fs-4'>Valor total: R$ {carrinho.valorTotal.toFixed(2).replace('.', ',')}</span>
                                </Row>
                            </>
                        ))
                    ) : (
                         <p className='fs-3 fw-bold'>O carrinho está vazio!</p>
                    )}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="secondary" size="sm" onClick={() => dispatch(fecharModal())}>
                        Fechar
                    </Button>
                    <Button variant='danger' size='sm' onClick={() => dispatch(limparCarrinho())}>
                        Esvaziar carrinho
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