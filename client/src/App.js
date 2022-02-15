// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
// import AddProduct from './components/product/AddProduct';
// import ListProduct from './components/product/ListProduct';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';

function App() {
  return (
    <div>
      <Topbar />
      {/* <BrowserRouter> */}

        {/* <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product-add' element={<AddProduct />} />
          <Route path='/product-list' element={<ListProduct />} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
