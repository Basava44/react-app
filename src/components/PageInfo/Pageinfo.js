import React from 'react';
import './Pageinfo.css';
import { connect } from 'react-redux';


const Pageinfo = (props) => {
    return ( 
        <div className="Pageinfo">
            <div className="data">
            <p className="title">{props.user}</p>
            <p>Balance as of 12/12/2020</p>
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return{
        user : state.user
    }
}



export default connect(mapStateToProps)(Pageinfo);