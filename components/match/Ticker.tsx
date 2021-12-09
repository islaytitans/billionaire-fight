import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Fighter from "../../types/Fighter";

const Ticker = ({
  fighter1,
  fighter2,
}: {
  fighter1: Fighter;
  fighter2: Fighter;
}) => {
  const Game = useContext(GameContext);

  return (
    <>
      <h1>Ticker</h1>
      <h2>{fighter1?.nickname}</h2>
      <h2>{fighter2?.nickname}</h2>
    </>
  );
};

export default Ticker;
