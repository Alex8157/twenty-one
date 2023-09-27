import React from "react";
import "../styles/card.css";

const Card: React.FC<{ number: number }> = ({number}) => {
    const getClass = () => {
        switch (true) {
            case number >= 10:
                return 'red'
            case number >= 7:
                return 'yellow'
            case number >= 4:
                return 'green'
            default:
                return 'blue'
        }
    };
    
    return (
        <div className={`card ${getClass()}`}>
            <h1>{!!number ? number : ''}</h1>
        </div>
    );
};

export default Card;
