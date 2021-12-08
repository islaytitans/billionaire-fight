import { FC, useState } from "react";
import { PlayersContext, defaultPlayerState } from "../context/PlayersContext";

const PlayersProvider: FC = ({ children }) => {
  const [player1, setPlayer1] = useState<Number | null>(
    defaultPlayerState.player1Id
  );
  const [player2, setPlayer2] = useState<Number | null>(
    defaultPlayerState.player2Id
  );

  const updatePlayer1 = (fighterId: Number | null) => {
    setPlayer1(fighterId);
  };
  const updatePlayer2 = (fighterId: Number | null) => {
    setPlayer2(fighterId);
  };

  return (
    <PlayersContext.Provider
      value={{
        player1Id: player1,
        player2Id: player2,
        updatePlayer1: updatePlayer1,
        updatePlayer2: updatePlayer2,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
