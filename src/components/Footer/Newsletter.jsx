import { FaPhoneAlt } from 'react-icons/fa';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <a href="tel:+041 5731795">
    <div className="app__newsletter hover:bg-gray-900 cursor-pointer">
      <div className="app__newsletter-heading">
        <SubHeading title="Doner House" />
        <h1 className="headtext__cormorant">Call Us Now!</h1>
        <p className="p__opensans text-lg mt-3">Place your order to experience the best foods.</p>
      </div>
      <FaPhoneAlt className='footer_phone_icon' />
      {/* <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div> */}
    </div>
  </a>
);

export default Newsletter;
