import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';

export default function PrivateOutlet() {
  const auth = useAuth();
  const { setLogin } = useAuth();

  useEffect(() => {
    if (!auth.user) {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        // console.log(foundUser);
        setLogin(foundUser);
        // console.log(auth);
      }
    }
  }, []);

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
