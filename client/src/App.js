import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import PrivateOutlet from './components/PrivateOutlet';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

import Dashboard from './pages/dashboard/Dashboard';
import UserList from './pages/user/UserList';
import User from './pages/user/User';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/*' element={<PrivateOutlet />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='user-list' element={<UserList />} />
            <Route path='user-add' element={<User />} />
            <Route path='user/:userId' element={<User />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
