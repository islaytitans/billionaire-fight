import { NextPage } from "next";
import Head from "next/head";

const Fighters: NextPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <h1>Pick your fighters</h1>
      </div>
    </div>
  );
};

export default Fighters;
