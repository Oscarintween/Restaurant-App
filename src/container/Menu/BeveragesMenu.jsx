import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import { wines } from '../../constants/data';
import { cocktails } from '../../constants/data';
import './BeveragesMenu.css';

const BeveragesMenu = () => (
  <div className="app__beveragesMenu flex__center section__padding" id="menu">
    <div className="app__beveragesMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Our Menu</h1>
    </div>

    <div className="app__beveragesMenu-menu">
      <div className="app__beveragesMenu-menu_wine  flex__center">
        <p className="app__beveragesMenu-menu_heading">Wine & Beer</p>
        <div className="app__beveragesMenu_menu_items">
          {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__beveragesMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__beveragesMenu-menu_cocktails  flex__center">
        <p className="app__beveragesMenu-menu_heading">Cocktails</p>
        <div className="app__beveragesMenu_menu_items">
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    {/* <button type="button" className="custom__button app__reservation-item" style={{ marginTop: '2rem' }}>View Main Course Menu</button> */}
    
  </div>
);

export default BeveragesMenu;