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
      <p className="rounded-t-xl bg-red-600 py-1 text-center text-xl text-yellow-400">Player 1</p>
    );
  } else if (fighter.id === Game.players.player2Id) {
    selected = (
      <p className="rounded-t-xl bg-yellow-300 py-1 text-center text-xl text-red-600">Player 2</p>
    );
  } else {
    selected = null;
  }

  return (
    <li
      className="my-5 flex flex-col rounded-xl bg-gray-50 pb-3 shadow-lg shadow-red-600/30 transition hover:scale-105 hover:shadow-red-600/60"
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
      <section className="mt-2 flex flex-col px-3">
        <h2 className="text-center text-xl">{fighter.firstName + " " + fighter.lastName}</h2>
        <p className="mb-3 text-center text-4xl">
          <i>{fighter.nickname}</i>
        </p>
        <hr />
        <div className="mx-4 grid grid-cols-3 pt-4">
          <span className="col-span-3 mx-1 flex flex-row justify-between">
            <strong>Wealth</strong>
            <i>${fighter.wealth}B</i>
            <CashOutline></CashOutline>
          </span>
          <span className="mx-1 flex flex-row justify-between">
            <BarbellOutline></BarbellOutline>
            <i>{fighter.strength}</i>
          </span>
          <span className="mx-1 flex flex-row justify-between">
            <ShieldOutline></ShieldOutline>
            <i>{fighter.defence}</i>
          </span>
          <span className="mx-1 flex flex-row justify-between">
            <PlayForwardOutline></PlayForwardOutline>
            <i>{fighter.speed}</i>
          </span>
        </div>
      </section>
    </li>
  );
};

export default FighterItem;
