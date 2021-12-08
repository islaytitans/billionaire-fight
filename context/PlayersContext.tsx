import { createContext } from "react";
import Players from "../types/Players";

export const defaultPlayerState = {
  player1Id: null,
  player2Id: null,
  updatePlayer1: (fighterId: Number | null) => console.log(fighterId),
  updatePlayer2: (fighterId: Number | null) => console.log(fighterId),
};

export const PlayersContext = createContext<Players>(defaultPlayerState);
