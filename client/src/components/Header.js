import { Alert, Image } from "react-bootstrap";
import Logo from '../images/burger_logo.jpg'
import '../assets/Header.css'
import { useEffect, useState } from "react";

const Header = () => {

    useEffect(() => {
        const horas = new Date().getHours();
        const diaSemana = new Date().getDay();
        
        if(diaSemana !== 1 && horas >= 17){
            setEstaAberta(true);
        }
    }, [])

    const [estaAberta, setEstaAberta] = useState(false);

    return(
        <header fluid className="header-background d-flex flex-column justify-content-center align-items-center">
            <Image src={Logo} alt="Rock'n'roll Burger logo" className="burger-logo" roundedCircle />
            <h1 className="custom-font mt-4 fw-bold">Rock 'n' Roll Burger</h1>
            <h3 className="custom-font mt-2 fs-3">Aqui, o sabor é o verdadeiro rockstar!</h3>
            <span className="d-block fs-6 mt-4">Rua das Avenidas 123, Jardim Alvorada, Americana - SP</span>
            {estaAberta ? (
                <Alert variant="success" className="d-block fs-6 mt-4 text-center">
                    Terça a Domingo - 17:00 às 23:00<br/><span className="fw-bold fs-5">Estamos abertos!</span>
                </Alert>
            ) : (
                <Alert variant="danger" className="d-block fs-6 mt-4 text-center">
                    Terça a Domingo - 17:00 às 23:00<br/><span className="fw-bold fs-5">Estamos fechados!</span>
                </Alert>
            )}
        </header>
    )
}

export default Header;