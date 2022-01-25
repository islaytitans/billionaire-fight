import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const SelectedFighters = () => {
  const Game = useContext(GameContext);

  return (
    <section className="flex flex-col items-center rounded-xl bg-gray-50 py-4 px-2 text-center shadow-lg shadow-red-600/30">
      <h1 className="text-4xl">Select your fighters!</h1>
      <div className="my-2 flex flex-col bg-gray-500 px-1">
        <h2 className="text-2xl">{Game.players.player1Id}</h2>
        <span className="my-3 text-3xl">VS</span>
        <h2 className="text-2xl">{Game.players.player2Id}</h2>
      </div>
    </section>
  );
};

export default SelectedFighters;
