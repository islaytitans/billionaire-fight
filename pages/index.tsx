import type { NextPage } from "next";
import Head from "next/head";
import TitleCard from "../components/global/TitleCard";

const Home: NextPage = () => {
  return (
    <section className="flex w-full min-h-screen justify-center items-center bg-red-600 text-yellow-300">
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleCard title="Billionaire Bum Fight" enterText="Press any key" />
    </section>
  );
};

export default Home;
