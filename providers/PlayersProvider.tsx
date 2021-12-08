import { FC, useContext, useState } from "react";
import { PlayersContext, defaultPlayerState } from "../context/PlayersContext";

const PlayersProvider: FC = ({ children }) => {
  const [player1, setPlayer1] = useState(defaultPlayerState.player1Id);
  const [player2, setPlayer2] = useState(defaultPlayerState.player2Id);

  const updatePlayer1 = () => {
    setPlayer1(2);
  };
  const updatePlayer2 = () => {
    setPlayer2(4);
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
