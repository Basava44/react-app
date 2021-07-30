import React from "react";
import Card from "./Card/Card";




const BalanceCards = () => {
    return ( 
        <div className="BalanceCards">
            <Card title="Current Balance" amount="$ 120,000"/>
            <Card title="Available Balance" amount="$ 30,000" summary/>            
        </div>
        
     );
}
 
export default BalanceCards;
