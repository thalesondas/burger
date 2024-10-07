import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartItem } from '../redux/cartSlice';
import { closeModal } from '../redux/modalSlice';
import { setAlert } from '../redux/alertSlice';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../assets/CustomModal.css'

const CustomModal = () => {

    const token = localStorage.getItem("token");
    
    const [isOpen, setIsOpen ] = useState(false);
    const [address, setAddress] = useState({
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        complement: ""
    });
    
    const modal = useSelector(state => state.modal);
    const cart = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const hours = new Date().getHours();
        const weekDay = new Date().getDay();
        
        setIsOpen(true);
        /*if(weekDay !== 1 && hours >= 17 && hours <= 22){
        }*/
    }, [])

    const canPlaceOrder = () => {
        return isOpen && address.street && address.number && address.neighborhood && address.city;
    };
    
    const sendOrder = async() => {

        if(!isLoggedIn){
            dispatch(setAlert({ message: 'Precisa estar conectado para fazer o pedido', variant: 'danger' }));
            return
        }

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
            orderDate: currentDate.toLocaleString('pt-BR', options),
            items: cart.cartItems.map(item => ({
                name: item.name,
                quantity: item.qty
            }))
        };

        try{
            const resp = await fetch('http://localhost:3001/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(order)
            });

            if(resp.ok){
                dispatch(setAlert({ message: 'Pedido enviado com sucesso!' + <br/> + ' Aguarde 40 minutos para a entrega.' , variant: 'success' }));
            } else {
                throw new Error('Falha ao enviar pedido.')
            }

            setAddress({
                street: "",
                number: "",
                neighborhood: "",
                city: "",
                complement: ""
            });
            dispatch(clearCart());

        } catch(error){
            dispatch(setAlert({ message: error.message, variant: 'danger' }));
        }
    }

    const alertClosedBurgerShop = () => {
        dispatch(setAlert({ message: 'A lanchonete está fechada!', variant: 'success' }));
        setAddress({
            street: "",
            number: "",
            neighborhood: "",
            city: "",
            complement: ""
        });
        dispatch(clearCart());
    }

    return(
        <>
            <Modal scrollable show={modal.isOpen} onHide={() => dispatch(closeModal())}>
                <Modal.Header>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                placeholder='Nome da rua'
                                value={address.street}
                                onChange={(e) => setAddress({ ...address, street: e.target.value})}>
                            </input>
                            <input 
                                className='input-address mt-1 mb-2 p-1 w-25'
                                type='number' 
                                placeholder='Número'
                                value={address.number}
                                onChange={(e) => setAddress({ ...address, number: e.target.value})}>
                            </input>
                            <input 
                                className='input-address mt-1 mb-2 p-1 w-75'
                                type='text' 
                                placeholder='Bairro'
                                value={address.neighborhood}
                                onChange={(e) => setAddress({ ...address, neighborhood: e.target.value})}>
                            </input>
                            <select 
                                className='input-address mt-1 mb-2 p-1 w-75'
                                value={address.city}
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            >
                                <option value="" disabled>Selecione a cidade</option>
                                <option value="Americana">Americana</option>
                                <option value="Santa Bárbara d'Oeste">Santa Bárbara d'Oeste</option>
                            </select>
                            <input
                                disabled
                                className='input-address mt-1 mb-2 p-1 w-25'
                                placeholder='SP'
                            >
                            </input>
                            <input 
                                className='input-address mt-1 mb-2 p-1 w-100'
                                type='text' 
                                placeholder='Complemento'
                                value={address.complement}
                                onChange={(e) => setAddress({ ...address, complement: e.target.value})}>
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
                        <Button disabled={!canPlaceOrder()}
                                variant="success"
                                size="sm"
                                onClick={() => sendOrder()}>
                            Enviar Pedido
                        </Button>
                    ) : (
                        <Button variant="danger" size="sm" onClick={() => alertClosedBurgerShop()}>
                            Enviar Pedido
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CustomModal;