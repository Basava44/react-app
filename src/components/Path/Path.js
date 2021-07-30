import React from "react";
import './Path.css'


const Path = (props) => {
    return ( 
        <div className="path">
            <p>{props.path}</p>
        </div>
     );
}
 
export default Path;