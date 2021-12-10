import { MouseEvent, useState } from "react";
import Link from "next/link";
import Fighter, { getModifier } from "../../types/Fighter";

const Ticker = ({
  fighter1,
  fighter2,
}: {
  fighter1: Fighter | null;
  fighter2: Fighter | null;
}) => {
  const [fighter1Wealth, setFighter1Wealth] = useState<number | null>(
    fighter1?.wealth ?? null
  );
  const [fighter2Wealth, setFighter2Wealth] = useState<number | null>(
    fighter2?.wealth ?? null
  );
  const [attack, setAttack] = useState<string>("3..2..1...FIGHT!");
  const [round, setRound] = useState<number>(0);
  const [fightFinished, setFightFinished] = useState<boolean>(false);

  if (fighter1 === null || fighter2 === null) {
    return (
      <section className="flex flex-col py-4 px-2 my-10 items-center text-center bg-gray-50 rounded-xl shadow-lg space-y-10">
        <h2>Two fighters need to be selected</h2>
        <Link href="/fighters">
          <a>Go to the roster</a>
        </Link>
      </section>
    );
  }

  const rollD20 = (): number => {
    return Math.floor(Math.random() * 20 + 1);
  };
  const rollD2 = (): number => {
    return Math.floor(Math.random() * 2 + 1);
  };

  const fighter1SpeedModifier = getModifier(fighter1.speed);
  const fighter2SpeedModifier = getModifier(fighter2.speed);

  const determineInitiative = () => {
    const fighter1SpeedRoll = rollD20();
    const fighter2SpeedRoll = rollD20();

    if (
      fighter1SpeedRoll + fighter1SpeedModifier >
      fighter2SpeedRoll + fighter2SpeedModifier
    ) {
      return { attacker: fighter1, defender: fighter2 };
    } else if (
      fighter1SpeedRoll + fighter1SpeedModifier <
      fighter2SpeedRoll + fighter2SpeedModifier
    ) {
      return { attacker: fighter2, defender: fighter1 };
    } else {
      if (rollD2() === 1) {
        return { attacker: fighter1, defender: fighter2 };
      } else {
        return { attacker: fighter2, defender: fighter1 };
      }
    }
  };

  const determineWinner = () => {
    debugger;
    let winner: Fighter | null = null;
    let loser: Fighter | null = null;
    if (fighter1Wealth !== null && fighter1Wealth <= 0) {
      winner = fighter2;
      loser = fighter1;
    } else if (fighter2Wealth !== null && fighter2Wealth <= 0) {
      winner = fighter1;
      loser = fighter2;
    }

    if (
      winner !== null &&
      loser !== null &&
      fighter1Wealth !== null &&
      fighter2Wealth !== null
    ) {
      //setFightFinished(true);
      const wealthLost = loser.wealth + winner.wealth;
      return (
        <>
          <p className="text-8xl text-red-600">{winner.nickname} won!</p>
          <p className="text-4xl">
            ${wealthLost} billion was donated to childrens hospitals and art
            graduates
          </p>
        </>
      );
    }
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRound(round + 1);
    const { attacker, defender } = determineInitiative();

    if (attacker.id === fighter1.id) {
      if (fighter2Wealth !== null) {
        setFighter2Wealth(fighter2Wealth - 50);
      }
    } else {
      if (fighter1Wealth !== null) {
        setFighter1Wealth(fighter1Wealth - 50);
      }
    }

    setAttack(`${attacker.nickname} drank ${defender.nickname}'s blood!`);
  };

  return (
    <section className="flex flex-col py-4 px-2 my-10 items-center text-center bg-gray-50 rounded-xl shadow-lg space-y-10">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <h2 className="text-2xl bg-pink-400">{fighter1.nickname}</h2>
        <h2 className="text-2xl bg-pink-400">{fighter2.nickname}</h2>
        <p className="bg-pink-400">{fighter1Wealth}</p>

        <p className="bg-pink-400">{fighter2Wealth}</p>
      </div>
      <p className="text-5xl">{attack}</p>
      {!fightFinished && (
        <button onClick={handleOnClick}>
          {round > 0 ? "Next Round" : "Begin!"}
        </button>
      )}
      {determineWinner()}
    </section>
  );
};

export default Ticker;
