import React, {useState} from "react";
// import { FaTimes } from 'react-icons/fa';

import './NeedAssistanceForm.css';

const NeedAssistanceForm = () => {

    return ( 
        <div className="NeedAssistanceForm">
            {/* <FaTimes onClick={close}/> */}
            <p className="title">Need Assistance?</p>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, tempore magnam exercitationem minus nulla, voluptate temporibus nobis nemo voluptatem molestiae cumque cum sit cupiditate vel dolorem corrupti distinctio similique incidunt.</p>
            <p>For answers to other common questions, click here to go to our FAQ section.</p>

            <form>
                <p>Seeking Assistance for</p>
                <label htmlFor="name">Name: <span className="required">*</span></label>
                <br/>
                <input type="text" name="name" id="name" minLength="5" placeholder="Enter your name" required />
                <br />
                <label htmlFor="email">Email: <span className="required">*</span></label>
                <br />
                <input type="email" name="email" id="email" placeholder="Enter your Email Id" required />
                <br />
                <label htmlFor="query">Query: <span className="required">*</span></label>
                <br />
                <textarea name="query" id="query" cols="40" rows="20" minLength="10" placeholder="Enter your Message" required></textarea>
                <br />
                <button type="submit">Send</button>
                <br />
                <span className="required">*</span>Required
            </form>
        </div>
     );
}
 
export default NeedAssistanceForm;