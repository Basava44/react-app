import React from 'react';
import {FaUser, FaEnvelope, FaTimes} from 'react-icons/fa';
import { connect } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import NeedAssistanceForm from '../../NeedAssistanceForm/NeedAssistanceForm';

import './HeaderTop.css';



const HeaderTop = (props) => { 
    const userchange = (e) =>{
        props.change(e.target.value);
    }

        const [x, changeclassname] = useState("needassistance");
        const viewAssistance = () =>{
            if(x === "needassistance")
                changeclassname("viewassistance");
            else
                changeclassname("needassistance");            
        }

        return ( 
            <div className="HeaderTop">
            <div className="HeaderItems">
                <li className="assistance" onClick={viewAssistance}>Need Assistance?</li>
                <li>
                    <select name="user" id="user" onChange={userchange}>
                        <option value="A1029087 - John Carson">A1029087 - John Carson</option>
                        <option value="G6239387 - Alex Arun">G6239387 - Alex Arun</option>
                        <option value="C1047392 - Chris Evan">C1047392 - Chris Evan</option>
                    </select>
                </li>
                <a href="#"><li><FaEnvelope /></li></a>
                <a href="#"><li><FaUser /></li></a>
            </div>
            <div className={x}>
                <NeedAssistanceForm />
                <FaTimes onClick={viewAssistance}/>
            </div>
        </div>
        );
}


const mapStateToProps = (state) =>{
    return state;
}

const mapDispathToProps = (dispath) =>{
    return{
        change : (value) =>{
            dispath({type:"CHANGE_USER",value})
        }
    }
}

 
export default connect(mapStateToProps,mapDispathToProps)(HeaderTop);