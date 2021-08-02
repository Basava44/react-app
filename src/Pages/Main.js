import React from 'react';

import Path from '../components/Path/Path';
import PageHeading from '../components/PageHeading/PageHeading';
import Pageinfo from '../components/PageInfo/Pageinfo';
import BalanceCards from '../components/BalanceCard/BalanceCards';
import Buttons from '../components/Buttons/Buttons';
import Slider from '../components/Slider/Slider';

const Main = () => {
    return ( 
      <main>
        <Path path="Home > Account Overview" />
        <PageHeading data ="Account Overview" />
        <Pageinfo />
        <BalanceCards />
        <Buttons />
        <Slider />
      </main>
     );
}
 
export default Main;