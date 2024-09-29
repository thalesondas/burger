import Cardapio from './Cardapio';
import Bebidas from './Bebidas';
import '../assets/Main.css'

const Main = () => {
    return(
        <main className='pb-5'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mt-5 mb-5'>Conheça nosso cardápio</h1>
                <h3 className='mt-1 mb-5'>Lanches</h3>
                <Cardapio />
                <h3 className='my-4'>Bebidas</h3>
                <Bebidas />
            </div>
        </main>
    )
}

export default Main;