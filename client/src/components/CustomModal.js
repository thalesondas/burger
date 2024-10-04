import { useEffect, useState } from 'react';
import { Alert, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartItem } from '../redux/cartSlice';
import { closeModal } from '../redux/modalSlice';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../assets/CustomModal.css'

const CustomModal = () => {

    useEffect(() => {
        const hours = new Date().getHours();
        const weekDay = new Date().getDay();
        
        if(weekDay !== 1 && hours >= 17){
            setIsOpen(true);
        }
    }, [])
    
    const [isOpen, setIsOpen ] = useState(false);
    const [address, setAddress] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');

    const modal = useSelector(state => state.modal);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const sendOrder = async() => {
        const currentDate = new Date();

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        const order = {
            address: address,
            price: cart.totalPrice,
            currentDate: currentDate.toLocaleString('pt-BR', options),
            items: cart.cartItems    
        }

        try{
            const resp = await fetch('https://rocknrollburger-server.vercel.app/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            });

            if(resp.ok){
                setAlertMessage('Pedido enviado com sucesso!');
                setAlertVariant('success');
                setShowAlert(true);
            } else {
                throw new Error('Falha ao enviar pedido.')
            }

            setAddress('');
            dispatch(clearCart());

        } catch(error){
            console.error(error);
            setAlertMessage('Erro ao enviar pedido: ' + error.message);
            setAlertVariant('danger');
            setShowAlert(true);
        }
    }

    const alertClosedBurgerShop = () => {
        setAlertMessage('Erro ao enviar pedido: a lanchonete está fechada!');
        setAlertVariant('danger');
        setShowAlert(true);
        setAddress('');
        dispatch(clearCart());
    }

    return(
        <>
            <Modal scrollable show={modal.isOpen} onHide={() => dispatch(closeModal())}>
                <Modal.Header>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showAlert && (
                        <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                            {alertMessage}
                        </Alert>
                    )}
                    {cart.cartItems.length > 0 ? (
                        <>
                            {cart.cartItems.map((item) => (
                                <Row key={item._id}>
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <div className='d-flex flex-column'>
                                            <h4 className='mb-1'>{item.name}</h4>
                                            <span className='mb-1'>Quantidade: {item.qty}</span>
                                            <span className='mb-2'>R$ {item.totalPrice.toFixed(2).replace('.', ',')}</span>
                                        </div>
                                        <i className="delete-icon bi bi-x-square-fill fs-3" onClick={() => dispatch(removeCartItem(item._id))}></i>
                                    </div>
                                    <hr/>
                                </Row>
                            ))}
                            <Row className='mt-1 mb-3'>
                                <span className='fw-bold fs-4'>Valor total: R$ {cart.totalPrice.toFixed(2).replace('.', ',')}</span>
                            </Row>
                            <span className='fw-bold fs-5'>Endereço de entrega:</span>
                            <input 
                                className='input-address mt-1 mb-2 p-1 w-100'
                                type='text' 
                                placeholder='Coloque seu endereço completo...'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}>
                            </input>
                        </>
                    ) : (
                        <p className='fs-3 fw-bold'>O carrinho está vazio!</p>
                    )}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="secondary" size="sm" onClick={() => dispatch(closeModal())}>
                        Fechar
                    </Button>
                    <Button variant='danger' size='sm' onClick={() => dispatch(clearCart())}>
                        Esvaziar carrinho
                    </Button>
                    {isOpen ? (
                        <Button disabled={address.length === 0} variant="success" size="sm" onClick={() => sendOrder()}>
                            Enviar Pedido
                        </Button>
                    ) : (
                        <Button disabled={address.length === 0} variant="danger" size="sm" onClick={() => alertClosedBurgerShop()}>
                            Enviar Pedido
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomModal;