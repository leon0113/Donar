/* eslint-disable no-unused-vars */
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu__background"></div>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>
    {/* ----------------------------------------------------- */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  ">
        <p className="app__specialMenu-menu_heading2">Menu</p>
        <div className="app__specialMenu_menu_items">
          {data.menu.map((wine, index) => (
            <MenuItem key={wine.title + index} image={wine.image} title={wine.title} choose={wine.choose} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div></div>
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.buger3} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pizzat</p>
        <div className="app__specialMenu_menu_items">
          {data.pizzat.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} image={cocktail.image} title={cocktail.title} choose={cocktail.choose} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      <button type="button" className="custom__button">Order Now!</button>
    </div>
    {/* ----------------------------------------------------- */}
    <div className="app__specialMenu-menu app__specialMenu-menu2">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza lisätäyttet</p>
        <div className="app__specialMenu_menu_items">
          {data.lisätäyttet.map((wine, index) => (
            <MenuItem key={wine.title + index} image={wine.image} title={wine.title} price={wine.price} choose={wine.choose} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div></div>
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.buger3} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Vege Menu</p>
        <div className="app__specialMenu_menu_items">
          {data.vegeMenu.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} image={cocktail.image} title={cocktail.title} choose={cocktail.choose} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      <button type="button" className="custom__button">Order Now!</button>
    </div>
    {/* ------------------------------------------------- */}
    <div className="app__specialMenu-menu app__specialMenu-menu2">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Salaatit</p>
        <div className="app__specialMenu_menu_items">
          {data.salaatit.map((wine, index) => (
            <MenuItem key={wine.title + index} image={wine.image} title={wine.title} price={wine.price} choose={wine.choose} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div></div>
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.buger3} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Extrat</p>
        <div className="app__specialMenu_menu_items">
          {data.extrat2.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} image={cocktail.image} title={cocktail.title} choose={cocktail.choose} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    {/* _____________________________________ */}

    {/* <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza lisätäyttet</p>
        <div className="app__specialMenu_menu_items">
          {data.menu.map((wine, index) => (
            <MenuItem key={wine.title + index} image={wine.image} title={wine.title} price={wine.price} choose={wine.choose} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div></div> */}
    {/* <div className="app__specialMenu-menu_img">
        <img src={images.buger3} alt="menu__img" />
      </div> */}
    {/* </div>  */}
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      <button type="button" className="custom__button">Order Now!</button>
    </div>
  </div>
);

export default SpecialMenu;
