import Fighter from "../../types/Fighter";
import FighterItem from "./FighterItem";

const FightersGrid = ({ fighters }: { fighters: Fighter[] | null }) => {
  if (fighters === null) {
    return <section className="py-3">No fighters to display</section>;
  }

  return (
    <ul className="flex flex-col py-3">
      {fighters.map((fighter: Fighter) => (
        <FighterItem key={fighter.id} fighter={fighter} />
      ))}
    </ul>
  );
};

export default FightersGrid;
