import { MouseEvent, useContext } from "react";
import Fighter from "../types/Fighter";
import Image from "next/image";
import { PlayersContext } from "../context/PlayersContext";

const FighterItem = ({ fighter }: { fighter: Fighter }) => {
  const Players = useContext(PlayersContext);

  const handleOnClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const fighterId = Number(e.currentTarget.dataset.id);

    if (Players.player1Id === fighterId) {
      Players.updatePlayer1(null);
    } else if (Players.player2Id === fighterId) {
      Players.updatePlayer2(null);
    } else if (Players.player1Id === null) {
      Players.updatePlayer1(fighterId);
    } else {
      Players.updatePlayer2(fighterId);
    }
  };

  let selected;
  if (fighter.id === Players.player1Id) {
    selected = <p>Player 1</p>;
  } else if (fighter.id === Players.player2Id) {
    selected = <p>Player 2</p>;
  } else {
    selected = null;
  }

  return (
    <li
      className="flex flex-col bg-gray-50 my-5 pb-3 rounded-xl shadow-lg"
      data-id={fighter.id}
      onClick={handleOnClick}
    >
      {selected}
      <figure className="relative mb-3">
        <Image
          src={fighter.image || ""}
          width={700}
          height={500}
          alt={fighter.name}
          layout="responsive"
        />
      </figure>
      <section className="flex flex-col px-3">
        <h2 className="text-3xl text-center">{fighter.name}</h2>
        <i className="italic text-center">&quot;{fighter.nickname}&quot;</i>
        <div className="flex flex-col pt-2">
          <span className="flex flex-row justify-between">
            <strong>Strength</strong>
            <i>{fighter.strength}</i>
          </span>
          <span className="flex flex-row justify-between">
            <strong>Defence</strong>
            <i>{fighter.defence}</i>
          </span>
          <span className="flex flex-row justify-between">
            <strong>Speed</strong>
            <i>{fighter.speed}</i>
          </span>
          <span className="flex flex-row justify-between">
            <strong>Wealth</strong>
            <i>${fighter.wealth}B</i>
          </span>
        </div>
      </section>
    </li>
  );
};

export default FighterItem;
