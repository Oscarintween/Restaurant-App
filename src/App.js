import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Header, SpecialMenu, Reservation} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Reservation />
    <FindUs />
    <Footer />
  </div>
);

export default App;
