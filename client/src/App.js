import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import CartFooter from './components/CartFooter'
import CustomModal from './components/CustomModal';
import Register from './components/Register';
import Login from './components/Login';
import MainContent from './components/MainContent';
import GlobalAlert from './components/GlobalAlert';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalAlert />
        <Header />
        <main className='pb-5'>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <CartFooter />
        <CustomModal />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
