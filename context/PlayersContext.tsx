import React, { useState, useEffect, createContext } from "react";
import Players from "../types/Players";

export const defaultPlayerState = {
  player1Id: 1,
  player2Id: 3,
};

export const PlayersContext = createContext<Players>(defaultPlayerState);
