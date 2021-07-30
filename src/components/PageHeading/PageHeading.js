import React from 'react';
import './PageHeading.css'

const PageHeading = (props) => {
    return ( 
        <div className="PageHeading">
            <p>{props.data}</p>
        </div>
     );
}
 
export default PageHeading;