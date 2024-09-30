import '../assets/CarrinhoCaixa.css'

const CarrinhoCaixa = () => {
    return(
        <footer className='pb-1 pt-3 d-flex align-items-center justify-content-center fixed-bottom w-100'>
            <span className='fs-5 me-2'>Carrinho</span>
            <div className='position-relative'>
                <i className="bi bi-cart4 fs-4"></i>
                <div className='carrinho-qtde d-flex justify-content-center align-items-center text-center position-absolute fs-5'>0</div>
            </div>
        </footer>
    )
}

export default CarrinhoCaixa;