import React from "react";
import './HeaderBottom.css';
import Logo from '../../../assets/images/logo.png';
import { FaBars } from "react-icons/fa";


const NavData = ['ACCOUNT SUMMARY','GRANTS','CONTRIBUTIONS','INVESTMENTS','RESOURCES','MY ACCOUNT',];

const HeaderBottom = () => {

    const navresponce = () =>{
        console.log("hi");
    }


    return ( 
        <div className="HeaderBottom">
            <nav className="navbar">
                <img src={Logo} alt='logo' />
                <ul className="navdata">
                    {
                        NavData.map((data)=>
                        <li key={data}>{data}</li>)
                    }
                </ul>
                <FaBars onClick={navresponce} className="bars"/>
            </nav>
        </div>
     );
}
 
export default HeaderBottom;