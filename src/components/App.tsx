import React from "react";
import EnemyCards from "./EnemyCards";
import Generator from "./Generator";
import Score from "./Score";
import Cards from "./Cards";
import "../styles/app.css";

const App = () => {
  const [game, setGame] = React.useState<boolean>(false);
  const [numbers, setNumbers] = React.useState<number[]>([]);
  const [enemyNumbers, setEnemyNumbers] = React.useState<number[]>([]);
  
  const getNumber = (tally: number) => {
    if (game) {
      setNumbers([tally]);
      setGame(!game);
      return;
    }
    if (tally !== 0) {
      setNumbers([...numbers, tally]);
    } else {
      setNumbers([]);
    }
  };

  const play = () => {
    if(game) setNumbers([]);
    setGame(!game);
  }
  
  return (
    <div className="app">
      <EnemyCards numbers={enemyNumbers} setNumbers={setEnemyNumbers} game={game}/>
      <button onClick={play}>Играть</button>
      <Generator setNumber={getNumber} />
      <Score game={game} player={numbers} enemy={enemyNumbers}/>
      <Cards numbers={numbers} />
    </div>
  );
};

export default App;
