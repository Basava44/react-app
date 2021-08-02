import React from 'react';

import Main from './Pages/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const APP = () => {
  return ( 
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
   );
}
 
export default APP;