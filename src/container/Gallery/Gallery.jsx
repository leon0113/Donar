import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
// import { images } from '../../constants';
import './Gallery.css';

const imgArr = [
  "https://i.ibb.co/K9ZftqM/res1.jpg",
  "https://i.ibb.co/FDbQQrD/Kana-Ranskalaisilla-removebg-preview.png",
  "https://i.ibb.co/sJppqW8/res3.jpg",
  "https://i.ibb.co/1zMJrSC/ISKANDER-KEBAB-removebg-preview-1.png",
  "https://i.ibb.co/KKQXXQ6/PIZZA-SALAMI-removebg-preview-2.png",
  "https://i.ibb.co/WgxzmDL/PIZZA-GREEN-DAY-removebg-preview-3.png ",
  "https://i.ibb.co/kQ2Dnxq/PIZZA-MAXICANA-SPECIAL-removebg-preview-2.png",
]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Donar House" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.</p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imgArr.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows ">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
