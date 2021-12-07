import Fighter from "../types/Fighter";
import FighterItem from "./FighterItem";

const FightersGrid: React.FC<Fighter[]> = ({ fighters }) => {
  return (
    <ul className="flex flex-col py-3">
      {fighters.map((fighter) => (
        <FighterItem key={fighter.id} fighter={fighter} />
      ))}
    </ul>
  );
};

export default FightersGrid;
