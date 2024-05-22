import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import ToggleSwitch from '../Switch/Switch'
import './Navbar.css';
import { useRecoilValue } from 'recoil';
import { lanAtom } from '../../atom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const lan = useRecoilValue(lanAtom);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoMain} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">{lan === 'en' ? 'Home' : 'Etusivu'}</a></li>
        <li className="p__opensans"><a href="#menu">{lan === 'en' ? 'Menu' : 'Valikko'}</a></li>
        <li className="p__opensans"><a href="#gallery">{lan === 'en' ? 'Gallery' : 'Galleria'}</a></li>
        <li className="p__opensans"><a href="#motive">{lan === 'en' ? 'Motive' : 'Motiivi'}</a></li>
        <li className="p__opensans"><a href="#contact">{lan === 'en' ? 'Location' : 'Sijainti'}</a></li>
      </ul>
      {/* <div className="app__navbar-login"> */}
      <ToggleSwitch />
      {/* <a href="#login" className="p__opensans text-blue-400">Log In / Registration</a>
        <div /> */}
      {/* <a href="/" className="p__opensans text-blue-600">Book Table</a> */}

      {/* </div> */}
      <div className="app__navbar-smallscreen transition duration-500">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>{lan === 'en' ? 'Home' : 'Etusivu'}</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>{lan === 'en' ? 'Menu' : 'Valikko'}</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>{lan === 'en' ? 'Gallery' : 'Galleria'}</a></li>
              <li><a href="#motive" onClick={() => setToggleMenu(false)}>{lan === 'en' ? 'Motive' : 'Motiivi'}</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>{lan === 'en' ? 'Location' : 'Sijainti'}</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
