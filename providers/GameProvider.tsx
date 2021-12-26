import { FC, useState } from "react";
import { GameContext, defaultGameState } from "../context/GameContext";
import Fighter from "../types/Fighter";

const PlayersProvider: FC = ({ children }) => {
  const [fighters, setFighters] = useState<Fighter[] | null>(defaultGameState.roster.fighters);

  const updateFighters = (fighters: Fighter[]) => {
    setFighters(fighters);
  };

  const [player1, setPlayer1] = useState<Number | null>(defaultGameState.players.player1Id);
  const [player2, setPlayer2] = useState<Number | null>(defaultGameState.players.player2Id);

  const updatePlayer1 = (fighterId: Number | null) => {
    setPlayer1(fighterId);
  };
  const updatePlayer2 = (fighterId: Number | null) => {
    setPlayer2(fighterId);
  };

  const getSelectedFighter1 = () => {
    return fighters?.find((x) => x.id === player1) ?? null;
  };
  const getSelectedFighter2 = () => {
    return fighters?.find((x) => x.id === player2) ?? null;
  };

  return (
    <GameContext.Provider
      value={{
        roster: {
          fighters: fighters,
          updateFighters: updateFighters,
          getSelectedFighter1,
          getSelectedFighter2,
        },
        players: {
          player1Id: player1,
          player2Id: player2,
          updatePlayer1: updatePlayer1,
          updatePlayer2: updatePlayer2,
        },
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default PlayersProvider;
