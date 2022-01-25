import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const StartFight = () => {
  const Game = useContext(GameContext);

  const noSelection = Game.players.player1Id === null && Game.players.player2Id === null;
  if (noSelection) {
    return <></>;
  }

  const disable = Game.players.player1Id === null || Game.players.player2Id === null;
  const fighter1 = Game.roster.getSelectedFighter1();
  const fighter2 = Game.roster.getSelectedFighter2();

  return (
    <aside className="sticky inset-x-0 bottom-0 grid min-w-full grid-cols-3 gap-1 bg-red-800 px-1 py-2 text-center text-xl tracking-widest text-yellow-300 md:gap-4 md:px-72 md:text-4xl">
      <div>
        {fighter1 && (
          <>
            <figure>
              <Image
                src={fighter1.image}
                alt={fighter1?.nickname}
                width={50}
                height={50}
                layout="intrinsic"
                priority
                className="rounded-full border border-gray-100 shadow-sm"
              />
            </figure>
            <p>{fighter1.nickname}</p>
          </>
        )}
      </div>
      <p className="text-3xl md:text-8xl">VS</p>
      <div>
        {fighter2 && (
          <>
            <figure>
              <Image
                src={fighter2.image}
                alt={fighter2.nickname}
                width={50}
                height={50}
                layout="intrinsic"
                priority
                className="rounded-full border border-gray-100 shadow-sm"
              />
            </figure>
            <p>{fighter2.nickname}</p>
          </>
        )}
      </div>
      {disable ? (
        <div className="col-span-3 rounded-full border-gray-100 bg-red-600 py-2 opacity-50">
          Fight!
        </div>
      ) : (
        <div className="col-span-3">
          <Link href="/fight">
            <a>
              <div className="rounded-full border-gray-100 bg-red-600 py-2 hover:bg-red-700">
                Fight!
              </div>
            </a>
          </Link>
        </div>
      )}
    </aside>
  );
};

export default StartFight;
