interface Players {
  player1Id: Number | null;
  player2Id: Number | null;
  updatePlayer1: (fighterId: Number | null) => void;
  updatePlayer2: (fighterId: Number | null) => void;
}

export default Players;
