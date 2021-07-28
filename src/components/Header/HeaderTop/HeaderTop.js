import React from 'react';
import {FaUser, FaEnvelope} from 'react-icons/fa';
// import './HeaderTop.css';
import classes from './HeaderTop.module.css';

const HeaderTop = () => {

    return ( 
        <div className={classes.HeaderTop}>
            <div className={classes.HeaderItems}>
                <li>Need Assistance?</li>
                <li>
                    <select name="user" id="user">
                        <option value="A1029087 - John Carson">A1029087 - John Carson</option>
                        <option value="B6573087 - Chris Evan">B6573087 - Chris Evan</option>
                        <option value="U8764207 - James">U8764207 - James</option>
                    </select>
                </li>
                <li><FaEnvelope /></li>
                <li><FaUser /></li>    
            </div>        
        </div>
     );
}
 
export default HeaderTop;