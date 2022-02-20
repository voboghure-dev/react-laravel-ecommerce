import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';

export default function PrivateOutlet() {
  const auth = useAuth();

  console.log('hello');

  return auth.user ? (
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
