import React from "react";
import Cards from "./Cards";
import generateCards from "../scripts/cardsGeneration";
import "../styles/enemyCards.css";

const EnemyCards: React.FC<{ numbers: number[], setNumbers: React.Dispatch<React.SetStateAction<number[]>>, game: boolean }> = ({numbers, setNumbers, game}) => {

    React.useEffect(()=>{
        if (!game) setNumbers(generateCards());
    },[game]);
    
    return (
        <div className="enemyCards">
            {game ?
                <Cards numbers={numbers} />
                :
                <div className="hiddenCards">
                    {numbers.map((number, index)=>
                        <div key={index} className="hiddenCard" />
                    )}
                </div>
            }
        </div>
    );
};

export default EnemyCards;
