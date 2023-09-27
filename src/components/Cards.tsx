import React from "react";
import Card from "./Card";
import "../styles/cards.css";

const Cards: React.FC<{ numbers: number[] }> = ({numbers}) => {
    
    return (
        <div className="cards">
            {numbers.map((number, index)=>
                <Card key={index} number={number}/>
            )}
        </div>
    );
};

export default Cards;
