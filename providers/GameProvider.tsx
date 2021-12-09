import { FC, useState } from "react";
import { GameContext, defaultGameState } from "../context/GameContext";
import Fighter from "../types/Fighter";

const PlayersProvider: FC = ({ children }) => {
  const [fighters, setFighters] = useState<Fighter[] | null>(
    defaultGameState.fighters
  );

  const updateFighters = (fighters: Fighter[] | null) => {
    setFighters(fighters);
  };

  const [player1, setPlayer1] = useState<Number | null>(
    defaultGameState.players.player1Id
  );
  const [player2, setPlayer2] = useState<Number | null>(
    defaultGameState.players.player2Id
  );

  const updatePlayer1 = (fighterId: Number | null) => {
    setPlayer1(fighterId);
  };
  const updatePlayer2 = (fighterId: Number | null) => {
    setPlayer2(fighterId);
  };

  return (
    <GameContext.Provider
      value={{
        fighters: fighters,
        updateFighters: updateFighters,
        players: {
          player1Id: player1,
          player2Id: player2,
          updatePlayer1: updatePlayer1,
          updatePlayer2: updatePlayer2,
        },
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default PlayersProvider;
