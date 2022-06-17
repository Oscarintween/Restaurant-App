import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Header, Menu, Reservation} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return(
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Reservation />
      <FindUs />
      <Footer />
    </div>
  );
}


export default App;
