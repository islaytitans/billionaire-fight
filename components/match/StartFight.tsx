import Link from "next/link";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const StartFight = () => {
  const Game = useContext(GameContext);

  const disable = Game.players.player1Id === null || Game.players.player2Id === null;

  if (disable) {
    return (
      <div className="py-3 my-2 text-4xl text-center tracking-widest bg-red-600 text-yellow-300 border-gray-100 rounded-xl opacity-50">
        Fight!
      </div>
    );
  }

  return (
    <Link href="/fight">
      <a>
        <div className="py-3 my-2 text-4xl text-center tracking-widest bg-red-600 hover:bg-red-700 text-yellow-300 border-gray-100 rounded-xl">
          Fight!
        </div>
      </a>
    </Link>
  );
};

export default StartFight;
