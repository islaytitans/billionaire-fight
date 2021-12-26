import type { NextPage } from "next";
import Head from "next/head";
import TitleCard from "../components/global/TitleCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleCard title="Billionaire Bum Fight" enterText="Press any key" />
    </>
  );
};

export default Home;
