import { useContext, MouseEvent } from "react";
import { GameContext } from "../../context/GameContext";
import Fighter, { getModifier } from "../../types/Fighter";

const Ticker = ({
  fighter1,
  fighter2,
}: {
  fighter1: Fighter | null;
  fighter2: Fighter | null;
}) => {
  const Game = useContext(GameContext);

  if (fighter1 === null || fighter2 === null) {
    return <h1>No fighters selected</h1>;
  }

  const fighter1SpeedModifier = getModifier(fighter1?.speed);
  const fighter2SpeedModifier = getModifier(fighter2?.speed);

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

    fighter2.currentWealth = fighter2.currentWealth - 50;
    console.log(fighter2);
  };

  return (
    <>
      <h1>Ticker</h1>
      <h2>{fighter1?.nickname}</h2>
      <p>{fighter1?.currentWealth}</p>
      <h2>{fighter2?.nickname}</h2>
      <p>{fighter2?.currentWealth}</p>
      <button onClick={handleOnClick}>Next Round</button>
    </>
  );
};

export default Ticker;
