
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import { useRecoilValue } from 'recoil';
import { lanAtom } from '../../atom';

const Footer = () => {
  const lan = useRecoilValue(lanAtom);
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext bg-black rounded-xl sm:bg-transparent">{lan === 'en' ? 'Contact us' : 'Ota yhteyttä'}</h1>
          {/* <h1 className="bg-white">Contact Us</h1> */}
          <p className="p__opensans bg-gray-900 sm:bg-transparent">Tenderinlenkki 6B LTK3, 00520 Helsinki, Finland</p>
          <p className="p__opensans bg-gray-900 sm:bg-transparent">Phone: 041 5731795</p>
        </div>

        <div className="app__footer-links_logo">
          {/* <img src={images.gericht} alt="footer_logo" />
         <h1 className="app__footer-headtext">Contact Us</h1> */}
          <h1 className="app__footer-headtext2 bg-black rounded-xl sm:bg-transparent">{lan === 'en' ? 'Find Us' : 'Etsi meidät'}</h1>
          <p className="p__opensans2 bg-gray-900 sm:bg-transparent">{lan === 'en' ? <>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</> : <>&quot;Paras tapa löytää itsensä on kadottaa itsensä toisten palvelemiseen.&quot;</>}</p>
          <img src={images.spoon} className="spoon__imgf mx-auto" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons mx-auto flex justify-center">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext bg-black rounded-xl sm:bg-transparent">{lan === 'en' ? 'Working Hours' : 'Työaika'}</h1>
          <p className="p__opensans">Mon - Thu: 10:30 am - 10:00 pm</p>
          <p className="p__opensans">Fri - Sat: 10:30 am - 12:00 pm</p>
          <p className="p__opensans">Sun : 11:30 am - 10:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2024 <span className='text-red-600 font-bold bg-black sm:bg-transparent'>Döner House</span>. { }{lan === 'en' ? 'All Rights reserved.' : 'Kaikki oikeudet pidätetään.'}</p>
      </div>

    </div>
  )
};

export default Footer;
