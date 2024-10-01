import Header from './components/Header.js';
import Main from './components/Main.js'
import CarrinhoCaixa from './components/CarrinhoCaixa.js'
import CustomModal from './components/CustomModal.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
        <Provider store={store}>
          <Header />
          <Main />
          <CarrinhoCaixa />
          <CustomModal />
        </Provider>
    </>
  );
}

export default App;
