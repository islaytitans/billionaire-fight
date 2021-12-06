import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TitleCard from "../components/TitleCard";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <TitleCard title="Billionaire Bum Fight" />
      </div>
    </div>
  );
};

export default Home;
