import { MouseEvent, useState } from "react";
import Link from "next/link";
import Fighter, { getModifier } from "../../types/Fighter";
import Attack from "../../types/Attack";
import stringFormat from "../../extentions/stringFormat";
import Image from "next/image";
import useDice from "../../match/useDice";

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
            ${wealthLost} billion was beaten out of them and donated to
            childrens hospitals and art graduates
          </p>
        </>
      );
    }
  };

  const determineAttack = (): Attack => {
    const attacks: Attack[] = [
      {
        title: "Drink blood",
        description: "{0} drank {1}'s blood!",
        damage: 50,
      },
      {
        title: "Done attack",
        description: "{0} sent in the drones!",
        damage: 30,
      },
      {
        title: "Planted evidence",
        description: "{0} leaked a photo of {1} with Epstien!",
        damage: 25,
      },
    ];

    return attacks[rollD3() - 1];
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

    const attack = determineAttack();
    const totalDamage = determineDamage(
      attack.damage,
      getModifier(attacker.strength),
      getModifier(defender.defence)
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
    <section className="flex flex-col py-4 px-2 my-10 items-center text-center bg-gray-50 rounded-xl shadow-lg space-y-10">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="flex flex-row items-center">
          <figure>
            <Image
              src={fighter1.image}
              alt={fighter1.nickname}
              width={50}
              height={50}
              layout="intrinsic"
              priority
              className="rounded-full border border-gray-100 shadow-sm"
            />
          </figure>
          <h2 className="text-xl px-1 py-0.5">{fighter1.nickname}</h2>
        </div>
        <div className="flex flex-row items-center">
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
          <h2 className="text-xl px-1 py-0.5">{fighter2.nickname}</h2>
        </div>

        <p className="text-2xl bg-green-400 rounded-3xl">{fighter1Wealth}</p>
        <p className="text-2xl bg-green-400 rounded-3xl">{fighter2Wealth}</p>
      </div>
      <p className="text-5xl">{attack}</p>
      {!fightFinished && (
        <button onClick={handleNextRound}>
          {round > 0 ? "Next Round" : "Begin!"}
        </button>
      )}
      {determineWinner()}
    </section>
  );
};

export default Ticker;
