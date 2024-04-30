/* eslint-disable react/prop-types */
import './MenuItem.css';
// import { images } from '../../constants';

const MenuItem = ({ image, title, price, tags, choose }) => (
  <div className='menuCard'>
    <img src={image} alt="" />
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#fffdf4' }}>{choose}</p>
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
