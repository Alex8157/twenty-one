import React from "react";
import "../styles/generator.css";

interface GeneratorProps {
    setNumber: (tally: number) => void;
}
  
const Generator: React.FC<GeneratorProps> = ({ setNumber }) => {
    const generateNumber = () => {
        const number = Math.floor(Math.random() * 11) + 1;
        setNumber(number);
    }

    return (
        <div className="generator">
            <button onClick={generateNumber}>Взять карту</button>
        </div>
    );
};

export default Generator;
