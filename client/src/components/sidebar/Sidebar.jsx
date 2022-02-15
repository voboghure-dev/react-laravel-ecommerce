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
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <Link to='/'>
                <LineStyle className='sidebarIcon' /> Home
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link to='/'>
                <Timeline className='sidebarIcon' /> Analytics
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link to='/'>
                <TrendingUp className='sidebarIcon' /> Sales
              </Link>
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Products</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Link to='/'>
                <AddShoppingCart className='sidebarIcon' /> Add Product
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link to='/'>
                <ShoppingCartCheckout className='sidebarIcon' /> List Product
              </Link>
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>User</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Link to='/'>
                <PersonAddAlt className='sidebarIcon' /> Add User
              </Link>
            </li>
            <li className='sidebarListItem'>
              <Link to='/user-list'>
                <Group className='sidebarIcon' /> List User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
