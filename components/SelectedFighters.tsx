import { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const SelectedFighters = () => {
  const Players = useContext(PlayersContext);

  return (
    <section className="flex flex-col py-4 px-2 items-center text-center bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-4xl">Select your fighters!</h1>
      <div className="flex flex-col my-2 px-1 bg-gray-500">
        <h2 className="text-2xl">{Players.player1Id}</h2>
        <span className="text-3xl my-3">VS</span>
        <h2 className="text-2xl">{Players.player2Id}</h2>
      </div>
    </section>
  );
};

export default SelectedFighters;
