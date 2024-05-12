
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        {/* <h1 className="bg-white">Contact Us</h1> */}
        <p className="p__opensans">Tenderinlenkki 6B LTK3, 00520 Helsinki, Finland</p>
        <p className="p__opensans">Phone: 041 5731795</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" />
         <h1 className="app__footer-headtext">Contact Us</h1> */}
        <h1 className="app__footer-headtext2">Find Us</h1>
        <p className="p__opensans2">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__imgf mx-auto" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons mx-auto flex justify-center">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        {/* <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p> */}
        <p className="p__opensans">Mon - Thu: 11:00 am - 10:00 pm</p>
        <p className="p__opensans">Fri : 11:00 am - 02:00 am</p>
        <p className="p__opensans">Sat : 11:30 am - 02:00 am</p>
        <p className="p__opensans">Sun : 11:30 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 <span className='text-red-600 font-bold'>Donar House</span>. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
