import { NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import PageTitle from "../components/global/PageTitle";
import Ticker from "../components/match/Ticker";
import { GameContext } from "../context/GameContext";

const Fight: NextPage = () => {
  const Game = useContext(GameContext);

  return (
    <div>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Beat the wealth out of each other" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen items-center">
        <PageTitle title="Beat the wealth out of each other!" />
        <Ticker
          fighter1={Game.roster.getSelectedFighter1()}
          fighter2={Game.roster.getSelectedFighter2()}
        />
      </div>
    </div>
  );
};

export default Fight;
