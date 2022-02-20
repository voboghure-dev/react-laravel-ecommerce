import './sidebar.scss';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  AddShoppingCart,
  ShoppingCartCheckout,
  PersonAddAlt,
  Group,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <NavLink to='/dashboard' className={({isActive}) => isActive ? 'active' : null }>
                <LineStyle className='sidebarIcon' /> Home
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <NavLink to='/analytics' className={({isActive}) => isActive ? 'active' : null }>
                <Timeline className='sidebarIcon' /> Analytics
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <NavLink to='/trending' className={({isActive}) => isActive ? 'active' : null }>
                <TrendingUp className='sidebarIcon' /> Sales
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Products</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <NavLink to='/product-add' className={({isActive}) => isActive ? 'active' : null }>
                <AddShoppingCart className='sidebarIcon' /> Add Product
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <NavLink to='/product-list' className={({isActive}) => isActive ? 'active' : null }>
                <ShoppingCartCheckout className='sidebarIcon' /> List Product
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>User</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <NavLink to='/user-add' className={({isActive}) => isActive ? 'active' : null }>
                <PersonAddAlt className='sidebarIcon' /> Add User
              </NavLink>
            </li>
            <li className='sidebarListItem'>
              <NavLink to='/user-list' className={({isActive}) => isActive ? 'active' : null }>
                <Group className='sidebarIcon' /> List User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
