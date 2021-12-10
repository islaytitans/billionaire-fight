import { MouseEvent, useEffect, useState } from "react";
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

  if (fighter1 === null || fighter2 === null) {
    return (
      <section>
        <h2>Two fighters need to be selected</h2>
      </section>
    );
  }

  const fighter1SpeedModifier = getModifier(fighter1.speed);
  const fighter2SpeedModifier = getModifier(fighter2.speed);

  const determineInitiative = () => {
    const fighter1Speed = Math.floor(Math.random() * 20 + 1);
    const fighter2Speed = Math.floor(Math.random() * 20 + 1);

    if (
      fighter1Speed + fighter1SpeedModifier >
      fighter2Speed + fighter2SpeedModifier
    ) {
      return { attacker: fighter1, defender: fighter2 };
    } else if (
      fighter1Speed + fighter1SpeedModifier <
      fighter2Speed + fighter2SpeedModifier
    ) {
      return { attacker: fighter2, defender: fighter1 };
    } else {
      const flip = Math.floor(Math.random() * 2 + 1);
      if (flip === 1) {
        return { attacker: fighter1, defender: fighter2 };
      } else {
        return { attacker: fighter2, defender: fighter1 };
      }
    }
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
  };

  return (
    <>
      <section>
        <h1>Ticker</h1>
        <h2>{fighter1.nickname}</h2>
        <p>{fighter1Wealth}</p>
        <h2>{fighter2.nickname}</h2>
        <p>{fighter2Wealth}</p>
        <button onClick={handleOnClick}>Next Round</button>
      </section>
    </>
  );
};

export default Ticker;
