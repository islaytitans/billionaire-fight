import Fighter from "../types/Fighter";
import Image from "next/image";

const FighterItem: React.FC<Fighter> = (fighter) => {
  console.log(fighter);

  return (
    <li>
      <figure>
        <Image
          src={fighter.image}
          width={300}
          height={300}
          alt={fighter.name}
        />
      </figure>
      <h2>{fighter.name}</h2>
      <i>{fighter.nickname}</i>
      <div>
        <span>Strength - {fighter.strength}</span>
        <span>Defence - {fighter.defence}</span>
        <span>Speed - {fighter.speed}</span>
      </div>
    </li>
  );
};

export default FighterItem;
