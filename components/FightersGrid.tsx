import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Fighter from "../types/Fighter";
import FighterItem from "./FighterItem";

const FightersGrid = ({ fighters }: { fighters: Fighter[] }) => {
  const Game = useContext(GameContext);

  return (
    <ul className="flex flex-col py-3">
      {fighters.map((fighter: Fighter) => (
        <FighterItem key={fighter.id} fighter={fighter} />
      ))}
    </ul>
  );
};

export default FightersGrid;
