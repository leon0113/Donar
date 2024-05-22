/* eslint-disable react/prop-types */
import { useRecoilValue } from 'recoil';
import './MenuItem.css';
import { lanAtom } from '../../atom';
// import { images } from '../../constants';

const MenuItem = ({ image, title, title1, price, tags, choose }) => {
  const lan = useRecoilValue(lanAtom);
  return (
    <div className='menuCard'>
      <img src={image} alt="" />
      <div className="app__menuitem">
        <div className="app__menuitem-head">
          <div className="app__menuitem-name">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{lan === 'en' ? title : title1}</p>
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
  )
};

export default MenuItem;
