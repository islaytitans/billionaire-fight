import Fighter from "./Fighter";

interface Match {
  round: number;
  winner: Fighter | null;
  totalWealthLost: number;
  matchComplete: boolean;
}

export default Match;
