import { MouseEvent, useContext } from "react";
import Fighter from "../types/Fighter";
import Image from "next/image";
import { GameContext } from "../context/GameContext";

const FighterItem = ({ fighter }: { fighter: Fighter }) => {
  const Game = useContext(GameContext);

  const handleOnClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const fighterId = Number(e.currentTarget.dataset.id);

    if (Game.players.player1Id === fighterId) {
      Game.players.updatePlayer1(null);
    } else if (Game.players.player2Id === fighterId) {
      Game.players.updatePlayer2(null);
    } else if (Game.players.player1Id === null) {
      Game.players.updatePlayer1(fighterId);
    } else {
      Game.players.updatePlayer2(fighterId);
    }
  };

  let selected;
  if (fighter.id === Game.players.player1Id) {
    selected = (
      <p className="bg-red-600 text-center py-1 rounded-xl">Player 1</p>
    );
  } else if (fighter.id === Game.players.player2Id) {
    selected = (
      <p className="bg-yellow-300 text-center py-1 rounded-xl">Player 2</p>
    );
  } else {
    selected = null;
  }

  return (
    <li
      className="flex flex-col bg-gray-50 my-5 pb-3 rounded-xl shadow-lg shadow-red-600/30"
      data-id={fighter.id}
      onClick={handleOnClick}
    >
      {selected}
      <figure className="relative mb-3">
        <Image
          src={fighter.image || ""}
          width={700}
          height={500}
          alt={fighter.firstName + " " + fighter.lastName}
          layout="responsive"
          priority
        />
      </figure>
      <section className="flex flex-col px-3">
        <h2 className="text-3xl text-center">
          {fighter.firstName +
            ' "' +
            fighter.nickname +
            '" ' +
            fighter.lastName}
        </h2>
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
