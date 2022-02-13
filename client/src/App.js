import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddProduct from './product/AddProduct';
import ListProduct from './product/ListProduct';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/product-add' element={<AddProduct />} />
          <Route path='/product-list' element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
