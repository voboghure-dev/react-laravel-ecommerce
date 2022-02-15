import './topbar.scss';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import img from '../../images/profile.jpg';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>ReactJS Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img src={img} alt='' className='topAvatar' />
        </div>
      </div>
    </div>
  );
}
