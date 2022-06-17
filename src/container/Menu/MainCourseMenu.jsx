import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import { entrees } from '../../constants/data';
import { mainCourse } from '../../constants/data';
import './MainCourseMenu.css';

const MainCourseMenu = () => (
  <div className="app__maincourseMenu flex__center section__padding" id="menu">
    <div className="app__maincourseMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Our Menu</h1>
    </div>

    <div className="app__maincourseMenu-menu">
      <div className="app__maincourseMenu-menu_entrees  flex__center">
        <p className="app__maincourseMenu-menu_heading">Entrees</p>
        <div className="app__beveragesMenu_menu_items">
          {entrees.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
          ))}
        </div>
      </div>

      <div className="app__maincourseMenu-menu_img">
        <img src={images.gallery04} alt="menu__img" />
      </div>

      <div className="app__maincourseMenu-menu_maincourse  flex__center">
        <p className="app__maincourseMenu-menu_heading">Main Course Meals</p>
        <div className="app__maincourseMenu_menu_items">
          {mainCourse.map((food, index) => (
            <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
          ))}
        </div>
      </div>
    </div>
    {/* <button type="button" className="custom__button app__reservation-item" style={{ marginTop: '2rem' }}>View Beverages Menu</button> */}
    
  </div>
);

export default MainCourseMenu;