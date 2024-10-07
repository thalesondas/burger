import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../redux/alertSlice';
import '../assets/GlobalAlert.css'

const GlobalAlert = () => {

    const dispatch = useDispatch();
    const { show, message, variant } = useSelector(state => state.alert);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                dispatch(clearAlert());
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [show, dispatch]);

    if (!show) return null;

    return (
        <div className='global-alert pe-4'>
            <Alert className='text-center' variant={variant}>
                {message}
            </Alert>
        </div>
    );
};

export default GlobalAlert;