import React, {useState} from "react";
import './HeaderBottom.css';
import Logo from '../../../assets/images/logo.png';
import { FaBars } from "react-icons/fa";




const HeaderBottom = () => {

    const NavData = ['ACCOUNT SUMMARY','GRANTS','CONTRIBUTIONS','INVESTMENTS','RESOURCES','MY ACCOUNT','NEED ASSISTANCE?'];
    
    const [classname, changeClass] = useState("navdata");

    const navresponce = () => {
        if(classname === "navdata")
            changeClass("navdata responsive");
        else
            changeClass("navdata");
    }

    return ( 
        <div className="HeaderBottom">
            <nav className="navbar">
                <img src={Logo} alt='logo' title="vanguard Logo" />
                <ul className={classname}>
                    {
                        NavData.map((data)=>
                        <li key={data}><a href="#">{data}</a></li>)
                    }
                </ul>
                <FaBars onClick={navresponce} className="bars"/>
            </nav>
        </div>
     );
}
 
export default HeaderBottom;