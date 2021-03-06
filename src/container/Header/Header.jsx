import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Come dine with us and we will show you the key to fine dining</p>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="lemon chicken" />
    </div>
  </div>
);

export default Header;
