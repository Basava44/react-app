import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Description.css'

import {FaArrowRight, FaRightArrow} from 'react-icons/fa'

const Description = () => {

    const [active,changeclass] = useState('');

    const x = ["Grants","Contribution","Exchange","Other Transactions"];

    const clear = () =>{
        for(let i=0; i<x.length;i++)
        {
            const z = document.getElementById(x[i]).id;
            document.getElementById(z).style.display = "none";
        }
    }

    const update = (e) =>{
        const x = document.getElementsByClassName("title");
        const ID = e.target.outerText;
        const y = document.getElementById(ID);
        for(let i=0; i<x.length; i++)
        {
            x[i].className = "title"
        }
        clear();
        e.target.className += " active";
        y.style.display = "block";
    }  


    return ( 
        <div className="description">
            <div className="heading">
                <p className="title active" onClick={update}>Grants</p>
                <p className="title" onClick={update}>Contribution</p>
                <p className="title" onClick={update}>Exchange</p>
                <p className="title" onClick={update}>Other Transactions</p>
            </div>
            <div className="content">
            <div className="features" id="Grants">
                    <p className="maintitle">Grants</p>
                    <p className="info">Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.</p>
                    <div className="data">
                        <div className="items">
                            <p className="title">Entered Date</p>
                            <p className="EnteredDate">12/09/2020</p>
                        </div>
                        <div className="items">
                            <p className="title">Received Date</p>
                            <p className="ReceivedDate">13/08/2021</p>
                        </div>
                        <div className="items">
                            <p className="title">Number of Shares</p>
                            <p className="NumberofShares">80</p>
                        </div>
                        <div className="items">
                            <p className="title">Type</p>
                            <p className="Type">Fixed</p>
                        </div>
                        <div className="items">
                            <p className="title">Amount</p>
                            <p className="Amount">20000</p>
                        </div>
                        <div className="items">
                            <p className="title">Status</p>
                            <p className="Status">High</p>
                        </div>                        
                    </div>
                    <br />
                    <hr />
                    <p className="activity">View Contribution Activity <FaArrowRight /></p>
                </div>
                <div className="features hide" id="Contribution">
                    <p className="maintitle">Contribution</p>
                    <p className="info">Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.</p>
                    <div className="data">
                        <div className="items">
                            <p className="title">Entered Date</p>
                            <p className="EnteredDate">18/7/1778</p>
                        </div>
                        <div className="items">
                            <p className="title">Received Date</p>
                            <p className="ReceivedDate">15/4/1994</p>
                        </div>
                        <div className="items">
                            <p className="title">Number of Shares</p>
                            <p className="NumberofShares">89</p>
                        </div>
                        <div className="items">
                            <p className="title">Type</p>
                            <p className="Type">Halo</p>
                        </div>
                        <div className="items">
                            <p className="title">Amount</p>
                            <p className="Amount">32666</p>
                        </div>
                        <div className="items">
                            <p className="title">Status</p>
                            <p className="Status">Low</p>
                        </div>                        
                    </div>
                    <br />
                    <hr />
                    <p className="activity">View Contribution Activity <FaArrowRight /></p>
                </div>
                <div className="features hide" id="Exchange">
                    <p className="maintitle">Exchange</p>
                    <p className="info">Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.</p>
                    <div className="data">
                        <div className="items">
                            <p className="title">Entered Date</p>
                            <p className="EnteredDate">18/7/1778</p>
                        </div>
                        <div className="items">
                            <p className="title">Received Date</p>
                            <p className="ReceivedDate">15/4/1994</p>
                        </div>
                        <div className="items">
                            <p className="title">Number of Shares</p>
                            <p className="NumberofShares">89</p>
                        </div>
                        <div className="items">
                            <p className="title">Type</p>
                            <p className="Type">Halo</p>
                        </div>
                        <div className="items">
                            <p className="title">Amount</p>
                            <p className="Amount">30000</p>
                        </div>
                        <div className="items">
                            <p className="title">Status</p>
                            <p className="Status">high</p>
                        </div>                        
                    </div>
                    <br />
                    <hr />
                    <p className="activity">View Contribution Activity <FaArrowRight /></p>
                </div>
                <div className="features hide" id="Other Transactions">
                    <p className="maintitle">Other Transactions</p>
                    <p className="info">Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.</p>
                    <div className="data">
                        <div className="items">
                            <p className="title">Entered Date</p>
                            <p className="EnteredDate">18/7/1778</p>
                        </div>
                        <div className="items">
                            <p className="title">Received Date</p>
                            <p className="ReceivedDate">15/4/1994</p>
                        </div>
                        <div className="items">
                            <p className="title">Number of Shares</p>
                            <p className="NumberofShares">89</p>
                        </div>
                        <div className="items">
                            <p className="title">Type</p>
                            <p className="Type">Halo</p>
                        </div>
                        <div className="items">
                            <p className="title">Amount</p>
                            <p className="Amount">60000</p>
                        </div>
                        <div className="items">
                            <p className="title">Status</p>
                            <p className="Status">none</p>
                        </div>                        
                    </div>
                    <br />
                    <hr />
                    <p className="activity">View Contribution Activity <FaArrowRight /></p>
                </div>
            </div>
        </div>
     );
}
 
export default Description;