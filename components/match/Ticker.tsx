import { MouseEvent, useEffect, useState } from "react";
import Fighter from "../../types/Fighter";
import stringFormat from "../../extentions/stringFormat";
import useDice from "../../match/useDice";
import useModifier from "../../match/useModifier";
import FighterAvatar from "../fighter/FighterAvatar";
import NoChosenFighters from "./NoChosenFighters";
import Match from "../../types/Match";

const Ticker = ({ fighter1, fighter2 }: { fighter1: Fighter | null; fighter2: Fighter | null }) => {
  const [fighter1Wealth, setFighter1Wealth] = useState<number | null>(fighter1?.wealth ?? null);
  const [fighter2Wealth, setFighter2Wealth] = useState<number | null>(fighter2?.wealth ?? null);
  const [attack, setAttack] = useState<string>("3..2..1...FIGHT!");
  const [rollD2, rollD3, rollD20] = useDice();
  const [calcStatModifier] = useModifier();
  const [match, setMatch] = useState<Match>({
    round: 1,
    winner: null,
    totalWealthLost: 0,
    matchComplete: false,
  });

  useEffect(() => {
    if (fighter1Wealth !== null && fighter1Wealth <= 0) {
      setMatch((prevMatch) => ({ ...prevMatch, winner: fighter2, matchComplete: true }));
    } else if (fighter2Wealth !== null && fighter2Wealth <= 0) {
      setMatch((prevMatch) => ({ ...prevMatch, winner: fighter1, matchComplete: true }));
    }
  }, [fighter1, fighter1Wealth, fighter2, fighter2Wealth]);

  if (fighter1 === null || fighter2 === null) {
    return <NoChosenFighters />;
  }

  const fighter1SpeedModifier = calcStatModifier(fighter1.speed);
  const fighter2SpeedModifier = calcStatModifier(fighter2.speed);

  const determineInitiative = () => {
    const fighter1SpeedRoll = rollD20();
    const fighter2SpeedRoll = rollD20();

    if (fighter1SpeedRoll + fighter1SpeedModifier > fighter2SpeedRoll + fighter2SpeedModifier) {
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

  const determineDamage = (
    damage: number,
    attackModifier: number,
    defenceModifier: number
  ): number => {
    return damage + attackModifier - defenceModifier;
  };

  const handleRound = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { attacker, defender } = determineInitiative();

    const attack = attacker.attacks[rollD3() - 1];
    let totalDamage = determineDamage(
      attack.damage,
      calcStatModifier(attacker.strength),
      calcStatModifier(defender.defence)
    );
    if (attacker.id === fighter1.id) {
      if (fighter2Wealth !== null) {
        if (totalDamage > fighter2Wealth) {
          totalDamage = fighter2Wealth;
          setFighter2Wealth(0);
        } else {
          setFighter2Wealth(fighter2Wealth - totalDamage);
        }
      }
    } else {
      if (fighter1Wealth !== null) {
        if (totalDamage > fighter1Wealth) {
          totalDamage = fighter1Wealth;
          setFighter1Wealth(0);
        } else {
          setFighter1Wealth(fighter1Wealth - totalDamage);
        }
      }
    }
    setMatch({
      ...match,
      totalWealthLost: match.totalWealthLost + totalDamage,
      round: match.round + 1,
    });

    setAttack(stringFormat(attack.description, attacker.nickname, defender.nickname));
  };

  return (
    <section className="grid grid-cols-2 gap-2 p-2 my-10 text-center items-end bg-gray-50 rounded-xl shadow-lg shadow-red-600/30 space-y-10">
      <FighterAvatar fighter={fighter1} fighterWealth={fighter1Wealth} />
      <FighterAvatar fighter={fighter2} fighterWealth={fighter2Wealth} />
      <p className="col-span-2 text-3xl">{attack}</p>
      {!match.matchComplete && (
        <button className="col-span-2" onClick={handleRound}>
          {match.round > 1 ? "Next Round" : "Begin!"}
        </button>
      )}
      {match.matchComplete && (
        <>
          <p className="text-6xl text-red-600 col-span-2">{match.winner?.nickname} won!</p>
          <p className="text-3xl col-span-2">
            ${match.totalWealthLost} billion was beaten out of them and donated to childrens
            hospitals and art graduates
          </p>
        </>
      )}
    </section>
  );
};

export default Ticker;
