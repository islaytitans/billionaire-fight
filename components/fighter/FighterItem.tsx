import { MouseEvent, useContext } from "react";
import Fighter from "../../types/Fighter";
import Image from "next/image";
import { GameContext } from "../../context/GameContext";
import { CashOutline, ShieldOutline, PlayForwardOutline, BarbellOutline } from "react-ionicons";

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
      <p className="bg-red-600 text-center text-yellow-400 text-xl py-1 rounded-t-xl">Player 1</p>
    );
  } else if (fighter.id === Game.players.player2Id) {
    selected = (
      <p className="bg-yellow-300 text-center text-red-600 text-xl py-1 rounded-t-xl">Player 2</p>
    );
  } else {
    selected = null;
  }

  return (
    <li
      className="flex flex-col transition bg-gray-50 my-5 pb-3 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/60 hover:scale-105"
      data-id={fighter.id}
      onClick={handleOnClick}>
      {selected}
      <figure className="">
        <Image
          src={fighter.image || ""}
          width={700}
          height={500}
          alt={fighter.firstName + " " + fighter.lastName}
          layout="responsive"
          priority
          className="rounded-t-xl"
        />
      </figure>
      <section className="flex flex-col px-3 mt-2">
        <h2 className="text-xl text-center">{fighter.firstName + " " + fighter.lastName}</h2>
        <p className="text-center text-4xl mb-3">
          <i>{fighter.nickname}</i>
        </p>
        <hr />
        <div className="grid grid-cols-3 pt-4 mx-4">
          <span className="col-span-3 flex flex-row justify-between mx-1">
            <strong>Wealth</strong>
            <i>${fighter.wealth}B</i>
            <CashOutline></CashOutline>
          </span>
          <span className="flex flex-row justify-between mx-1">
            <BarbellOutline></BarbellOutline>
            <i>{fighter.strength}</i>
          </span>
          <span className="flex flex-row justify-between mx-1">
            <ShieldOutline></ShieldOutline>
            <i>{fighter.defence}</i>
          </span>
          <span className="flex flex-row justify-between mx-1">
            <PlayForwardOutline></PlayForwardOutline>
            <i>{fighter.speed}</i>
          </span>
        </div>
      </section>
    </li>
  );
};

export default FighterItem;
