import Drinks from "./Drinks"
import Menu from "./Menu"

const MainContent = () => {
    return(
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='custom-font mt-5 mb-5'>Conheça nosso cardápio</h1>
            <h3 className='custom-font mt-1 mb-5'>Lanches</h3>
            <Menu />
            <h3 className='custom-font my-4'>Bebidas</h3>
            <Drinks />
        </div>
    )
}

export default MainContent;