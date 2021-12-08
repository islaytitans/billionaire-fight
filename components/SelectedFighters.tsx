import { MouseEvent, useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const SelectedFighters = () => {
  const Players = useContext(PlayersContext);
  const handleOnClick1 = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Players.updatePlayer1();
  };
  const handleOnClick2 = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Players.updatePlayer2();
  };

  return (
    <section>
      <h1>Choose your fighters</h1>
      {Players.player1Id}
      {Players.player2Id}
      <button onClick={handleOnClick1}>Select player 1</button>
      <button onClick={handleOnClick2}>Select player 2</button>
    </section>
  );
};

export default SelectedFighters;
