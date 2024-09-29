import Cardapio from './Cardapio';
import '../assets/Main.css'

const Main = () => {
    return(
        <main>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mt-5 mb-5'>Conheça nosso cardápio</h1>
                <h3 className='mt-1 mb-5'>Lanches</h3>
            </div>
            <Cardapio />
        </main>
    )
}

export default Main;