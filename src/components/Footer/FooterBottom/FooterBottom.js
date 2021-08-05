import React from 'react';
import classes from './FooterBottom.module.css'
import BottomImage from '../../../assets/images/Vanguard_logo_new_2020_1.png';

const FooterBottom = () => {
    return ( 
        <div className={classes.FooterBottom}>
            <img src={BottomImage} alt="logo" />
            <p>© 2019 Vanguard Charitable Endowment Program. VANGUARD and the Vanguard Ship Logo are trademarks of The Vanguard Group, Inc.</p>
        </div>
     );
}
 
export default FooterBottom;