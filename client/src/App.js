import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Main from './components/Main'
import CartFooter from './components/CartFooter'
import CustomModal from './components/CustomModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
        <Provider store={store}>
          <Header />
          <Main />
          <CartFooter />
          <CustomModal />
        </Provider>
    </>
  );
}

export default App;
