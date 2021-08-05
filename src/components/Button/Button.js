import React from 'react';

import './Button.css';
import {FaArrowRight} from 'react-icons/fa'


const Button = (props) => {
    return ( 
        <div className="Button">
            <button>{props.title} <FaArrowRight /></button>
        </div>
     );
}
 
export default Button;