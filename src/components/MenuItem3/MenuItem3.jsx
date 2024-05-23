/* eslint-disable react/prop-types */
import { useRecoilValue } from 'recoil';
import './MenuItem3.css';
import { lanAtom } from '../../atom';
// import { images } from '../../constants';

const MenuItem = ({ image, title, title1, price, tags, tags1, choose, choose1 }) => {
    const lan = useRecoilValue(lanAtom);
    return (
        <div className='menuCard menuCard3'>
            <img src={image} alt="" />
            <div className="app__menuitem">
                <div className="app__menuitem-head app__menuitem-head3">
                    <div className="app__menuitem-name">
                        <p className="p__cormorant itemName" style={{ color: '#DCCA87' }}>{lan === 'fn' ? title : title1}</p>
                    </div>
                    <div className="app__menuitem-dash app__menuitem-dash3" />
                    <div className="app__menuitem-price">
                        <p className="p__cormorant itemName">{price}</p>
                    </div>
                </div>

                <div className="app__menuitem-sub">
                    <p className="p__opensans itemName" style={{ color: '#fffdf4' }}>{lan === 'fn' ? choose : choose1}</p>
                    <p className="p__opensans itemName" style={{ color: '#AAAAAA' }}>{lan === 'fn' ? tags : tags1}</p>
                </div>
            </div>
        </div>
    )
};

export default MenuItem;
