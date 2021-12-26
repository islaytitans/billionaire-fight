import { NextPage } from "next";
import Head from "next/head";
import FightersGrid from "../components/fighter/FightersGrid";
import PageTitle from "../components/global/PageTitle";
import StartFight from "../components/match/StartFight";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Fighters: NextPage = () => {
  const Game = useContext(GameContext);

  return (
    <>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col max-w-xs md:max-w-md lg:max-w-2xl mx-auto pt-6">
        <PageTitle title="Select your fighters!" />
        <FightersGrid fighters={Game.roster.fighters} />
        <StartFight />
      </section>
    </>
  );
};

export default Fighters;
