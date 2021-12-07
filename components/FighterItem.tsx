import Fighter from "../types/Fighter";
import Image from "next/image";

const FighterItem: React.FC<Fighter> = (props) => {
  console.log(props);

  return (
    <li className="flex flex-col bg-gray-50 my-5 pb-3 rounded-xl shadow-lg">
      <figure className="relative mb-3">
        <Image
          src={props.fighter.image || ""}
          width={700}
          height={500}
          alt={props.fighter.name}
          layout="responsive"
        />
      </figure>
      <section className="flex flex-col px-3">
        <h2 className="text-3xl text-center">{props.fighter.name}</h2>
        <i className="italic text-center">"{props.fighter.nickname}"</i>
        <div className="flex flex-col pt-2">
          <span className="flex flex-row justify-between">
            <strong>Strength</strong>
            <i>{props.fighter.strength}</i>
          </span>
          <span className="flex flex-row justify-between">
            <strong>Defence</strong>
            <i>{props.fighter.defence}</i>
          </span>
          <span className="flex flex-row justify-between">
            <strong>Speed</strong>
            <i>{props.fighter.speed}</i>
          </span>
          <span className="flex flex-row justify-between">
            <strong>Wealth</strong>
            <i>${props.fighter.wealth}B</i>
          </span>
        </div>
      </section>
    </li>
  );
};

export default FighterItem;
