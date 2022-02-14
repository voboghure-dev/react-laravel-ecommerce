import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddProduct from './product/AddProduct';
import ListProduct from './product/ListProduct';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product-add' element={<AddProduct />} />
          <Route path='/product-list' element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
