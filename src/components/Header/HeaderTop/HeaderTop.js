import React from 'react';
import {FaUser, FaEnvelope, FaTimes} from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';
import NeedAssistanceForm from '../../NeedAssistanceForm/NeedAssistanceForm';

import classes from './HeaderTop.module.css';

const HeaderTop = () => { 

        const [classname, changeclassname] = useState(classes.needassistance);
        const viewAssistance = () =>{
            if(classname === classes.needassistance)
                changeclassname(classes.viewassistance);
            else
                changeclassname(classes.needassistance);            
        }

        return ( 
            <div className={classes.HeaderTop}>
            <div className={classes.HeaderItems}>
                <li className={classes.assistance} onClick={viewAssistance}>Need Assistance?</li>
                <li>
                    <select name="user" id="user">
                        <option value="A1029087 - John Carson">A1029087 - John Carson</option>
                        <option value="G6239387 - Alex Arun">G6239387 - Alex Arun</option>
                        <option value="C1047392 - Chris Evan">C1047392 - Chris Evan</option>
                    </select>
                </li>
                <a href="#"><li><FaEnvelope /></li></a>
                <a href="#"><li><FaUser /></li></a>
            </div>
            <div className={classname}>
                <NeedAssistanceForm />
                <FaTimes onClick={viewAssistance}/>
            </div>
        </div>
        );
}
 
export default HeaderTop;