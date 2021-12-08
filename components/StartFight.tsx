import Link from "next/link";
import { useContext } from "react";
import { PlayersContext } from "../context/PlayersContext";

const StartFight = () => {
  const Players = useContext(PlayersContext);

  const disableButton =
    Players.player1Id === null || Players.player2Id === null;

  return (
    <button
      disabled={disableButton}
      className="w-96 py-3 my-2 text-4xl tracking-widest bg-red-600 hover:bg-red-700 text-yellow-300 border-gray-100 rounded-xl disabled:opacity-50"
    >
      <Link href="/fight">
        <a>Fight!</a>
      </Link>
    </button>
  );
};

export default StartFight;
