import { FaPhoneAlt } from 'react-icons/fa';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import { useRecoilValue } from 'recoil';
import { lanAtom } from '../../atom';

const Newsletter = () => {
  const lan = useRecoilValue(lanAtom)
  return (
    <a href="tel:+041 5731795">
      <div className="app__newsletter hover:bg-gray-900 cursor-pointer">
        <div className="app__newsletter-heading">
          <SubHeading title="Döner House" />
          <h1 className="headtext__cormorant">{lan == 'en' ? 'Call Us Now!' : <span className='text-5xl'>Soita meille nyt!</span>}</h1>
          <p className="p__opensans text-lg mt-3">{lan == 'en' ? 'Place your order to experience the best foods.' : 'Tee tilauksesi ja koe parhaat ruoat.'}</p>
        </div>
        <FaPhoneAlt className='footer_phone_icon' />
        {/* <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div> */}
      </div>
    </a>
  )
};

export default Newsletter;
