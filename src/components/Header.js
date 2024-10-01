import { Alert, Image } from "react-bootstrap";
import Logo from '../images/burger_logo.jpg'
import '../assets/Header.css'

const Header = () => {
    return(
        <header fluid className="header-background d-flex flex-column justify-content-center align-items-center">
            <Image src={Logo} alt="Rock'n'roll Burger logo" className="burger-logo" roundedCircle />
            <h1 className="custom-font mt-4 fw-bold">Rock 'n' Roll Burger</h1>
            <h3 className="custom-font mt-2 fs-3">Aqui, o sabor é o verdadeiro rockstar!</h3>
            <span className="d-block fs-6 mt-4">Rua das Avenidas 123, Jardim Alvorada, Americana - SP</span>
            <Alert variant="danger" className="d-block fs-6 mt-4">Terça a Domingo - 17:00 às 23:00</Alert>
        </header>
    )
}

export default Header;