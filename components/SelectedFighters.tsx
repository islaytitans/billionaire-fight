import { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const SelectedFighters = () => {
  const Players = useContext(PlayersContext);

  return (
    <section>
      <h1>Choose your fighters</h1>
      {Players.player1Id}
      {Players.player2Id}
    </section>
  );
};

export default SelectedFighters;
