import { NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import Ticker from "../components/match/Ticker";
import useGetFightersService from "../services/useGetFightersService";
import { GameContext } from "../context/GameContext";
import Fighter from "../types/Fighter";

const Fight: NextPage = () => {
  const service = useGetFightersService();
  const Game = useContext(GameContext);

  function getFighter(
    fighters: Fighter[],
    playerId: Number | null
  ): Fighter | null {
    const fighter = fighters.find((f) => f.id === playerId);
    return fighter || null;
  }

  return (
    <div>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Beat the wealth out of each other" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col min-h-screen items-center">
          <PageTitle title="Beat the wealth out of each other!" />
          {service.status === "loading" && <div>Loading</div>}
          {service.status === "loaded" && (
            <>
              <Ticker
                fighter1={getFighter(service.payload, Game.players.player1Id)}
                fighter2={getFighter(service.payload, Game.players.player2Id)}
              />
            </>
          )}
          {service.status === "error" && (
            <div>Error, failed to retrieve the fighters</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Fight;
