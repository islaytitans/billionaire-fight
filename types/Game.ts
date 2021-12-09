import Fighter from "./Fighter";
import Players from "./Players";

interface Game {
  players: Players;
  fighters: Fighter[] | null;
  updateFighters: (fighters: Fighter[] | null) => void;
}

export default Game;
