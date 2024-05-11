/* eslint-disable react/prop-types */
import './MenuItem3.css';
// import { images } from '../../constants';

const MenuItem = ({ image, title, price, tags, choose }) => (
    <div className='menuCard menuCard3'>
        <img src={image} alt="" />
        <div className="app__menuitem">
            <div className="app__menuitem-head app__menuitem-head3">
                <div className="app__menuitem-name">
                    <p className="p__cormorant itemName" style={{ color: '#DCCA87' }}>{title}</p>
                </div>
                <div className="app__menuitem-dash app__menuitem-dash3" />
                <div className="app__menuitem-price">
                    <p className="p__cormorant itemName">{price}</p>
                </div>
            </div>

            <div className="app__menuitem-sub">
                <p className="p__opensans itemName" style={{ color: '#fffdf4' }}>{choose}</p>
                <p className="p__opensans itemName" style={{ color: '#AAAAAA' }}>{tags}</p>
            </div>
        </div>
    </div>
);

export default MenuItem;
