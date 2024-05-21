// import React from 'react';

import { useRecoilValue } from 'recoil';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';
import { lanAtom } from '../../atom';

const Chef = () => {
  const lan = useRecoilValue(lanAtom);

  return (
    <div className="app__bg app__wrapper section__padding pt-20" id='motive'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.res} alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={lan === 'en' ? 'Our motive' : 'Meidän motiivimme'} />
        <h1 className="headtext__cormorant">{
          lan === 'en' ? 'What we believe in' : 'Mihin uskomme'
        }</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">{
              lan === 'en' ? 'At Doner House, our motive is simple yet profound:' : 'Doner Housessa motiivimme on yksinkertainen, mutta syvällinen:'
            } </p>
          </div>
          <p className="p__opensans">{
            lan === 'en' ? 'to celebrate the rich tapestry of Finnish cuisine while offering a warm and inviting dining experience. We are committed to crafting culinary delights that not only tantalize the taste buds but also honor the traditions and flavors unique to Finland.' : 'juhlimaan suomalaisen keittiön runsasta kuvakudosta tarjoten samalla lämpimän ja kutsuvan ruokailuelämyksen. Olemme sitoutuneet valmistamaan kulinaarisia herkkuja, jotka eivät vain kiehtoo makunystyröitä, vaan kunnioittavat Suomen ainutlaatuisia perinteitä ja makuja.'
          }</p>
        </div>

        <div className="app__chef-sign">
          {/* <p>Shakir Ahmed Sifat</p> */}
          <p className="p__opensans">{
            lan === 'en' ? 'Chefs & Founders' : 'Kokit ja perustajat'
          }</p>
          <img src={images.logoMain} className='w-10 h-20' alt="sign_image" />
        </div>
      </div>
    </div>
  )
};

export default Chef;
