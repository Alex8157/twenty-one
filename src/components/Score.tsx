import React from "react";
import "../styles/score.css";

const Score: React.FC<{ game: boolean, player: number[], enemy: number[] }> = ({game, player, enemy}) => {
    const [playerScore, setPlayerScore] = React.useState<number>(0);
    const [enemyScore, setEnemyScore] = React.useState<number>(0);

    React.useEffect(()=>{
        if (game) {
            setPlayerScore(getScore(player));
            setEnemyScore(getScore(enemy))
        };
    },[game]);

    const getScore = (numbers: number[]) => {
        return numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue;}, 0)
    };

    const getText = () => {
        if (playerScore > 21 && enemyScore <= 21) {
            return <h3>У вас перебор, победил ваш соперник.</h3>
        }
        if (playerScore <= 21 && enemyScore > 21) {
            return <h3>У вашего соперника перебор, вы победили!</h3>
        }
        if (playerScore > 21 && enemyScore > 21) {
            return <h3>У обоих игроков перебор, ничья.</h3>
        }
        if (playerScore > enemyScore) {
            return <h3>Поздравляем! Вы победили!!!</h3>
        }
        if (playerScore < enemyScore) {
            return <h3>К сожалению, вы проиграли.</h3>
        }
        return <h3>Ничья!</h3>
    }
    
    return (
        <div className="score">
            {game &&
                <>
                    <span>Ваш счёт: {playerScore}</span>
                    <span>Счёт соперника:{enemyScore}</span>
                    {getText()}
                </>
            }
        </div>
    );
};

export default Score;
