import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
// import Register from './components/auth/Register';

import Dashboard from './pages/dashboard/Dashboard';
import UserList from './pages/user/UserList';
import User from './pages/user/User';
import PrivateOutlet from './components/PrivateOutlet';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='user-list' element={<UserList />} />
          <Route path='user-add' element={<User />} />
          <Route path='user/:userId' element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
