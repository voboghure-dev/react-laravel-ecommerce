import './sidebar.scss';
import { LineStyle, Timeline, TrendingUp, AddShoppingCart, ShoppingCartCheckout, PersonAddAlt, Group } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' /> Home
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' /> Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Products</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <AddShoppingCart className='sidebarIcon' /> Add Product
            </li>
            <li className='sidebarListItem'>
              <ShoppingCartCheckout className='sidebarIcon' /> List Product
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>User</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <PersonAddAlt className='sidebarIcon' /> Add User
            </li>
            <li className='sidebarListItem'>
              <Group className='sidebarIcon' /> List User
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
