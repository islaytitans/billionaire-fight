import { createContext } from "react";
import Fighter from "../types/Fighter";
import Game from "../types/Game";

export const defaultGameState = {
  roster: {
    fighters: [],
    updateFighters: (fighters: Fighter[] | null) => console.log(fighters),
    getSelectedFighter1: () => null,
    getSelectedFighter2: () => null,
  },
  players: {
    player1Id: null,
    player2Id: null,
    updatePlayer1: (fighterId: Number | null) => console.log(fighterId),
    updatePlayer2: (fighterId: Number | null) => console.log(fighterId),
  },
};

export const GameContext = createContext<Game>(defaultGameState);
