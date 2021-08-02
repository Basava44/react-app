import React from 'react';

import Path from '../components/Path/Path';
import PageHeading from '../components/PageHeading/PageHeading';
import Pageinfo from '../components/PageInfo/Pageinfo';
import Buttons from '../components/Buttons/Buttons';
import Slider from '../components/Slider/Slider';
import HeaderMiddle from '../components/HeaderMiddle/HeaderMiddle';



const Main = () => {
    return ( 
      <main>
        <Path path="Home > Account Overview" />
        <PageHeading data ="Account Overview" />
        <Pageinfo />
        <HeaderMiddle />
        <Buttons />
        <Slider />

        
      </main>
     );
}
 
export default Main;