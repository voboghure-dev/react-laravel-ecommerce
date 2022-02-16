import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
// import AddProduct from './components/product/AddProduct';
// import ListProduct from './components/product/ListProduct';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
import './app.scss';
import Home from './pages/home/Home';
import UserList from './pages/user/UserList';
import User from './pages/user/User';
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className='container'>
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/user-add' element={<User />} />
          <Route path='/user/:userId' element={<User />} />
          {/* <Route path='/product-add' element={<AddProduct />} />
          <Route path='/product-list' element={<ListProduct />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
