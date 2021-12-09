import { NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import SelectedFighters from "../components/SelectedFighters";
import Ticker from "../components/match/Ticker";
import useGetFightersService from "../services/useGetFightersService";
import { GameContext } from "../context/GameContext";

const Fight: NextPage = () => {
  const service = useGetFightersService();
  const Game = useContext(GameContext);

  const fighter1 =
    service.status === "loaded"
      ? service.payload.find((f) => f.id === Game.players.player1Id)
      : null;
  const fighter2 =
    service.status === "loaded"
      ? service.payload.find((f) => f.id === Game.players.player2Id)
      : null;

  return (
    <div>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let there be blood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col min-h-screen items-center">
          <PageTitle title="Let there be blood!" />
          <Ticker fighter1={fighter1} fighter2={fighter2} />
          <SelectedFighters />
        </div>
      </main>
    </div>
  );
};

export default Fight;
