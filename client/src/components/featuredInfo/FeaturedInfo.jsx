import './featuredInfo.scss';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <div className='featuredTitle'>Revenue</div>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,098</span>
          <span className='featuredMoneyRate'>
            -12.09 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <div className="featuredSub">Compared to last month.</div>
      </div>
      <div className='featuredItem'>
        <div className='featuredTitle'>Sales</div>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4,098</span>
          <span className='featuredMoneyRate'>
            -1.09 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <div className="featuredSub">Compared to last month.</div>
      </div>
      <div className='featuredItem'>
        <div className='featuredTitle'>Cost</div>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,100</span>
          <span className='featuredMoneyRate'>
            +2.09 <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <div className="featuredSub">Compared to last month.</div>
      </div>
    </div>
  );
}
