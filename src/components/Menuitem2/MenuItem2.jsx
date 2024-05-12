/* eslint-disable react/prop-types */
import './MenuItem2.css';
// import { images } from '../../constants';

const MenuItem2 = ({ image, title, price, tags, choose }) => (
    <div className='menuCard1'>
        <img className='w-20 h-18' src={image} alt="" />
        <div className="app__menuitem">
            <div className="app__menuitem-head">
                <div className="app__menuitem-name">
                    <p className="p__cormorant text-sm sm:text-xl md:text-2xl" style={{ color: '#DCCA87' }}>{title}</p>
                </div>
                {/* <div className="app__menuitem-dash" /> */}
                <div className="app__menuitem-price1">
                    {title.includes("Coca") ? <p className="p__cormorant text-sm  sm:text-xl ">{price}</p> : <p className="p__cormorant text-base md:text-2xl ">{price}</p>}
                </div>
            </div>

            <div className="app__menuitem-sub">
                <p className="p__opensans text-[14px]" style={{ color: '#fffdf4' }}>{choose}</p>
                <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
            </div>
        </div>
    </div>
);

export default MenuItem2;
