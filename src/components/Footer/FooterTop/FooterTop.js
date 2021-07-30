import React from 'react';
import './FooterTop.css';
import Logo from '../../../assets/images/logo.png';

import {FaLinkedin} from 'react-icons/fa';



const FooterTop = () => {
    const links1 = ["About Us","Careers","FAQs","Contact Us","Giving Matters Blog","News & Events"]
    const links2 = ["Sitemap","Forms","Request Literature","Policy & Guidelines","Privacy Policy","Company Policies"];
    return ( 
        <div className="FooterTop">
            <div className="content">
            <div className="media">
                  <img src={Logo} alt="logo" />
                  <br />
                  <FaLinkedin /><span className="link">Follow us on LinkedIn</span>
                  <br />
                  <p>© 2019 Vanguard Charitable Endowment Program</p>
            </div>
            <div className="links">
                    <div className="col1">
                        {links1.map(link => <li key={link}>{link}</li>)}
                    </div>
                    <div className="col2">
                        {links2.map(link => <li key={link}>{link}</li>)}
                    </div>
            </div>
            <div className="search">
                    <p>Subscribe to our Newsletter</p>
                    <input type="email" placeholder="Enter Your Email Address"/>
            </div>
        </div>
    </div>
     );
}
 
export default FooterTop;