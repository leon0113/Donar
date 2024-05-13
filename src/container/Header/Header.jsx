

import { SubHeading } from '../../components';
import SwiperJs from '../../components/swiper/Swiper';
// import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding pb-28 sm:pt-10" id="home">
    <div className="app__wrapper_info mt-14 md:mt-0">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1 text-[40px] sm:text-[100px]">Welcome to <span className='text-yellow-300 text-[50px] sm:text-[120px]'>Döner House</span></h1>
      <p className="p__opensans text-[15px] sm:text-[20px] leading-8" style={{ margin: '2rem 0' }}>where every dish tells a story of Finnish flavor. Nestled in the heart of Finland, our restaurant invites you on a culinary journey like no other. Explore our menu, savor our specialties, and experience the essence of Finnish hospitality. </p>
      <a href="tel:+041 5731795" className="custom__button bg-yellow-500 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Click to Call Us Now</a>
    </div>


    <div className='swiperSlider'>
      <SwiperJs />
    </div>
  </div>
);

export default Header;
