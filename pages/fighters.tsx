import { NextPage } from "next";
import Head from "next/head";
import FightersGrid from "../components/FightersGrid";
import useGetFightersService from "../services/useGetFightersService";
import Header from "../components/Header";

const Fighters: NextPage = () => {
  const service = useGetFightersService();

  return (
    <div>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="flex min-h-screen justify-center items-center">
          {service.status === "loading" && <div>Loading</div>}
          {service.status === "loaded" && (
            <FightersGrid fighters={service.payload} />
          )}
          {service.status === "error" && (
            <div>Error, failed to retrieve the fighters</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Fighters;
