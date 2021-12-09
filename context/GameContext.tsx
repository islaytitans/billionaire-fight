import { createContext } from "react";
import Fighter from "../types/Fighter";
import Game from "../types/Game";

export const defaultGameState = {
  players: {
    player1Id: null,
    player2Id: null,
    updatePlayer1: (fighterId: Number | null) => console.log(fighterId),
    updatePlayer2: (fighterId: Number | null) => console.log(fighterId),
  },
  fighters: [],
  updateFighters: (fighters: Fighter[] | null) => console.log(fighters),
};

export const GameContext = createContext<Game>(defaultGameState);
