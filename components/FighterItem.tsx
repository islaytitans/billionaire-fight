import Fighter from "../types/Fighter";
import Image from "next/image";

const FighterItem: React.FC<Fighter> = (props) => {
  console.log(props);

  return (
    <li className="flex flex-col">
      <figure className='relative'>
        <Image
          src={props.fighter.image || ''}
          width={700}
          height={500}
          alt={props.fighter.name}
          layout="responsive"
        />
      </figure>
      <h2 className="text-3xl text-center">{props.fighter.name}</h2>
      <i className="italic text-center">"{props.fighter.nickname}"</i>
      <div className="flex flex-col">
        <span>Strength - {props.fighter.strength}</span>
        <span>Defence - {props.fighter.defence}</span>
        <span>Speed - {props.fighter.speed}</span>
        <span>Wealth - ${props.fighter.wealth}B</span>
      </div>
    </li>
  );
};

export default FighterItem;
