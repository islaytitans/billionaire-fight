import React from "react";
import Players from "../types/Players";

export const PlayerContext = React.createContext<Players | null>(null);
