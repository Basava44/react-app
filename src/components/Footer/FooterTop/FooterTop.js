import React from 'react';
import classes from './FooterTop.module.css'
import Logo from '../../../assets/images/logo.png';

import {FaLinkedin} from 'react-icons/fa';



const FooterTop = () => {
    const links1 = ["About Us","Careers","FAQs","Contact Us","Giving Matters Blog","News & Events"]
    const links2 = ["Sitemap","Forms","Request Literature","Policy & Guidelines","Privacy Policy","Company Policies"];
    return ( 
        <div className={classes.FooterTop}>
            <div className={classes.content}>
            <div className={classes.media}>
                  <img src={Logo} alt="logo" />
                  <br />
                  <a href="#"><FaLinkedin /> <span className={classes.link}>Follow us on LinkedIn</span></a>
                  <br />
                  <p>© 2019 Vanguard Charitable Endowment Program</p>
            </div>
            <div className={classes.links}>
                    <div className={classes.col1}>
                        {links1.map(link => <li key={link}><a href="#">{link}</a></li>)}
                    </div>
                    <div className={classes.col2}>
                        {links2.map(link => <li key={link}><a href="#">{link}</a></li>)}
                    </div>
            </div>
            <div className={classes.search}>
                    <p>Subscribe to our Newsletter</p>
                    <input type="email" placeholder="Enter Your Email Address"/>
            </div>
        </div>
    </div>
     );
}
 
export default FooterTop;