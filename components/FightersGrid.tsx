import Fighter from "../types/Fighter";
import FighterItem from "./FighterItem";

const FightersGrid: React.FC<Fighter[]> = ({ fighters }) => {
  return (
    <ul className="flex flex-col">
      {fighters.map((fighter) => (
        <FighterItem key={fighter.id} fighter={fighter} />
      ))}
    </ul>
  );
};

export default FightersGrid;
