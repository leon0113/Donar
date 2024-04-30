import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter relative">
    <div className="app__newsletter-heading">
      <SubHeading title="Donar House" />
      <h1 className="headtext__cormorant">Call Us Now!</h1>
      <p className="p__opensans">Place your order to experience the best foods.</p>
    </div>
    {/* <FaPhoneAlt className='footer_phone_icon absolute top-3' /> */}
    {/* <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div> */}
  </div>
);

export default Newsletter;
