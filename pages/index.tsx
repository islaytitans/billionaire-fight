import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TitleCard from "../components/TitleCard";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-red-600 text-yellow-300">
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleCard title="Billionaire Bum Fight" enterText="Press any key" />
    </div>
  );
};

export default Home;
