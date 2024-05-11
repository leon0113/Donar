

import { SubHeading } from '../../components';
import SwiperJs from '../../components/swiper/Swiper';
// import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding pb-28" id="home">
    <div className="app__wrapper_info mt-14 md:mt-0">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Welcome to <span className='text-yellow-300 text-[90px] sm:text-[120px]'>Dönar House</span></h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Call US Now</button>
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.burger1} alt="header_img" /> */}
    </div>
    <div className='swiperSlider'>
      <SwiperJs />
    </div>
  </div>
);

export default Header;
