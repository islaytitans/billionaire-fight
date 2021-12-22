import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const SelectedFighters = () => {
  const Game = useContext(GameContext);

  return (
    <section className="flex flex-col py-4 px-2 items-center text-center bg-gray-50 rounded-xl shadow-lg shadow-red-600/30">
      <h1 className="text-4xl">Select your fighters!</h1>
      <div className="flex flex-col my-2 px-1 bg-gray-500">
        <h2 className="text-2xl">{Game.players.player1Id}</h2>
        <span className="text-3xl my-3">VS</span>
        <h2 className="text-2xl">{Game.players.player2Id}</h2>
      </div>
    </section>
  );
};

export default SelectedFighters;
