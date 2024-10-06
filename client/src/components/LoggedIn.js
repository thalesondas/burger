import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import '../assets/LoggedBox.css'
import { useEffect, useState } from "react";

const LoggedIn = () => {

    useEffect(() => {
        const hours = new Date().getHours();
        
        if(hours <= 11){
            setGreetings("Bom dia");
        } else if(hours >= 18){
            setGreetings("Boa noite");
        } else {
            setGreetings("Boa tarde");
        }

        setUsername(localStorage.getItem('username'));
    }, [])

    const [greetings, setGreetings] = useState("")
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        dispatch(logout());
    }

    return(
        <Container className="d-flex justify-content-center align-items-center">
            <span className="fw-bold">{greetings}, {username}</span>
            <Button onClick={handleLogOut} className="btn-footer ms-3 py-1 px-2">Sair da conta</Button>
        </Container>
    )
}

export default LoggedIn;