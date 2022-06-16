import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="letterG" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>
          We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best 
          gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.
          Enjoy our dazzling dishes and make the most of your eating background with us!
        </p>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>
        Gericht’s legacy comes from The parent  Restaurant which was built up in 1963.
        Gericht was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge.
        Today, there are 37 areas all through the world.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
