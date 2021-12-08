import React, { useState, useEffect, createContext } from "react";
import Players from "../types/Players";

export const defaultPlayerState = {
  player1Id: 1,
  player2Id: 3,
  updatePlayer1: () => console.log("player1"),
  updatePlayer2: () => console.log("player2"),
};

export const PlayersContext = createContext<Players>(defaultPlayerState);
