import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import './Gallery.css';
import { useRecoilValue } from 'recoil';
import { lanAtom } from '../../atom';

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
  const lan = useRecoilValue(lanAtom);
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
        <SubHeading title="Doner House" />
        <h1 className="headtext__cormorant">{lan === 'en' ? 'Photo Gallery' : 'Kuvagalleria'}</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>{
          lan === 'en' ? 'The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.' : 'Paras tapa löytää itsesi on hukata itsesi muiden palvelukseen.'
        }</p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imgArr.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              {/* <span className="gallery__image-icon" >name of item</span> */}
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
