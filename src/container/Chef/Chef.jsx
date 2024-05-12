// import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding pt-20">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.res} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our motive" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Donar House, our motive is simple yet profound: </p>
        </div>
        <p className="p__opensans">to celebrate the rich tapestry of Finnish cuisine while offering a warm and inviting dining experience. We are committed to crafting culinary delights that not only tantalize the taste buds but also honor the traditions and flavors unique to Finland. With each dish meticulously prepared, we invite you to embark on a gastronomic journey that reflects our passion for quality, authenticity, and the joy of sharing memorable moments around the table. Welcome to Donar House, where every meal is infused with the spirit of Finnish culture and hospitality. </p>
      </div>

      <div className="app__chef-sign">
        {/* <p>Shakir Ahmed Sifat</p> */}
        <p className="p__opensans">Chef's & Founder's</p>
        <img src={images.logoMain} className='w-10 h-20' alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
