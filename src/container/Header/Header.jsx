

import { useRecoilValue } from 'recoil';
import { SubHeading } from '../../components';
import SwiperJs from '../../components/swiper/Swiper';
// import { images } from '../../constants';
import './Header.css';
import { lanAtom } from '../../atom';

const Header = () => {
  const lan = useRecoilValue(lanAtom);
  return (
    <div className="app__header app__wrapper section__padding pb-28 sm:pt-10" id="home">
      <div className="app__wrapper_info mt-14 md:mt-0">
        <SubHeading title={lan === 'en' ? 'Chase the new flavour' : 'Jahtaa uutta makua'} />
        <h1 className="app__header-h1 text-[40px] sm:text-[100px]">{lan === 'en' ? 'Welcome to' : 'Tervetuloa'} <span className='text-yellow-300 text-[50px] sm:text-[120px]'>Döner House</span></h1>
        <p className="p__opensans text-[15px] sm:text-[20px] leading-8" style={{ margin: '2rem 0' }}>{
          lan === 'en' ? 'where every dish tells a story of Finnish flavor. Nestled in the heart of Finland, our restaurant invites you on a culinary journey like no other. Explore our menu, savor our specialties, and experience the essence of Finnish hospitality.' : 'jossa jokainen ruokalaji kertoo tarinan suomalaisesta mausta. Suomen sydämessä sijaitseva ravintolamme kutsuu kulinaariselle matkalle vertaansa vailla. Tutustu ruokalistaamme, maistele erikoisuuksiamme ja koe suomalaisen vieraanvaraisuuden ydin.'
        } </p>
        <a href="tel:+041 5731795" className="custom__button bg-yellow-500 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">{lan === 'en' ? 'Click to Call Us Now' : 'Klikkaa soittaa meille nyt'}</a>
      </div>


      <div className='swiperSlider'>
        <SwiperJs />
      </div>
    </div>
  )
};

export default Header;
