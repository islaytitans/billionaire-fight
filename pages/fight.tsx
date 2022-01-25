import { NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import PageTitle from "../components/global/PageTitle";
import Ticker from "../components/match/Ticker";
import { GameContext } from "../context/GameContext";

const Fight: NextPage = () => {
  const Game = useContext(GameContext);

  return (
    <>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Beat the wealth out of each other" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto flex max-w-xs flex-col pt-6 md:max-w-md lg:max-w-2xl">
        <PageTitle title="Beat the wealth out of each other!" />
        <Ticker
          fighter1={Game.roster.getSelectedFighter1()}
          fighter2={Game.roster.getSelectedFighter2()}
        />
      </section>
    </>
  );
};

export default Fight;
