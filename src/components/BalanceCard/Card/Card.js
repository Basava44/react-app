import React from 'react';
import './Card.css';
import info from '../../../assets/images/shape.png';
import arrowRight from '../../../assets/images/arrow-r.png';


const Card = (props) => {
    return ( 
        <div className="Card">
            <p>{props.title}</p><img src={info} alt="info" />
            <br />
            <p>{props.amount}</p>
            {props.summary ? <p>View Transaction Summary <img src={arrowRight} alt="right arrow" /></p>: null}
        </div>
     );
}
 
export default Card;