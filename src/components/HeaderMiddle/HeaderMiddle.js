import React from 'react';
import './HeadderMiddle.css';

import BalanceCards from '../BalanceCard/BalanceCards'
import Description from './Description/Description';

const HeaderMiddle = () => {
    return ( 
        <div className="headermiddle">
            <BalanceCards />
            <Description />
        </div>
     );
}
 
export default HeaderMiddle;