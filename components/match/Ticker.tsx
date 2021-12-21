import { MouseEvent, useState } from "react";
import Link from "next/link";
import Fighter from "../../types/Fighter";
import Attack from "../../types/Attack";
import stringFormat from "../../extentions/stringFormat";
import useDice from "../../match/useDice";
import useModifier from "../../match/useModifier";
import FighterAvatar from "../fighter/FighterAvatar";

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
  const [rollD2, rollD3, rollD20] = useDice();
  const [calcStatModifier] = useModifier();

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

  const fighter1SpeedModifier = calcStatModifier(fighter1.speed);
  const fighter2SpeedModifier = calcStatModifier(fighter2.speed);

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
        <div className="col-span-2">
          <p className="text-8xl text-red-600">{winner.nickname} won!</p>
          <p className="text-4xl">
            ${wealthLost} billion was beaten out of them and donated to
            childrens hospitals and art graduates
          </p>
        </div>
      );
    }
  };

  const determineAttack = (fighter: Fighter): Attack => {
    return fighter.attacks[rollD3() - 1];
  };

  const determineDamage = (
    damage: number,
    attackModifier: number,
    defenceModifier: number
  ): number => {
    return damage + attackModifier - defenceModifier;
  };

  const handleNextRound = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRound(round + 1);
    const { attacker, defender } = determineInitiative();

    const attack = determineAttack(attacker);
    const totalDamage = determineDamage(
      attack.damage,
      calcStatModifier(attacker.strength),
      calcStatModifier(defender.defence)
    );
    if (attacker.id === fighter1.id) {
      if (fighter2Wealth !== null) {
        setFighter2Wealth(fighter2Wealth - totalDamage);
      }
    } else {
      if (fighter1Wealth !== null) {
        setFighter1Wealth(fighter1Wealth - totalDamage);
      }
    }

    setAttack(
      stringFormat(attack.description, attacker.nickname, defender.nickname)
    );
  };

  return (
    <section className="grid grid-cols-2 gap-2 py-4 px-2 my-10 items-center text-center bg-gray-50 rounded-xl shadow-lg space-y-10">
      <FighterAvatar fighter={fighter1} fighterWealth={fighter1Wealth} />
      <FighterAvatar fighter={fighter2} fighterWealth={fighter2Wealth} />
      <p className="col-span-2 text-5xl">{attack}</p>
      {!fightFinished && (
        <button className="col-span-2" onClick={handleNextRound}>
          {round > 0 ? "Next Round" : "Begin!"}
        </button>
      )}
      {determineWinner()}
    </section>
  );
};

export default Ticker;
