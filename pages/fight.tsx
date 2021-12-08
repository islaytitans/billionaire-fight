import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import SelectedFighters from "../components/SelectedFighters";

const Fight: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let there be blood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="flex flex-col min-h-screen items-center">
          <PageTitle title="Let there be blood!" />
          <SelectedFighters />
        </div>
      </main>
    </div>
  );
};

export default Fight;
