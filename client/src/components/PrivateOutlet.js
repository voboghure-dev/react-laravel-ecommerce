import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';

export default function PrivateOutlet() {
  let user = null;

  const loggedInUser = localStorage.getItem('user');
  if (loggedInUser) {
    user = JSON.parse(loggedInUser);
  }

  // auth.user
  return user ? (
    <>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to='/login' />
  );
}
