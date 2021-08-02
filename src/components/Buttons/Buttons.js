import React from 'react';
import Button from '../Button/Button';

import './Buttons.css';

const Buttons = () => {

    const ButtonData = ['Contribution', 'Grant', 'Exchange', 'Manage Your Account'];


   return(
       <div className="Buttons">
           {ButtonData.map((data)=>
                <Button title={data} />
           )}
       </div>
   );
}
 
export default Buttons;