import Fighter from "./Fighter";

interface Roster {
  fighters: Fighter[] | null;
  updateFighters: (fighters: Fighter[]) => void;
  getSelectedFighter1: () => Fighter | null;
  getSelectedFighter2: () => Fighter | null;
}

export default Roster;
