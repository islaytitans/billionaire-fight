import Fighter from "../../types/Fighter";
import FighterItem from "./FighterItem";

const FightersGrid = ({ fighters }: { fighters: Fighter[] | null }) => {
  if (fighters === null) {
    return <section className="py-3">No fighters to display</section>;
  }

  return (
    <ul className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-3">
      {fighters.map((fighter: Fighter) => (
        <FighterItem key={fighter.id} fighter={fighter} />
      ))}
    </ul>
  );
};

export default FightersGrid;
