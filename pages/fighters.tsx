import { NextPage } from "next";
import Head from "next/head";
import FightersGrid from "../components/fighter/FightersGrid";
import useGetFightersService from "../services/useGetFightersService";
import PageTitle from "../components/global/PageTitle";
import StartFight from "../components/match/StartFight";

const Fighters: NextPage = () => {
  const service = useGetFightersService();

  return (
    <>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen items-center">
        <PageTitle title="Select your fighters!" />
        {service.status === "loading" && <div>Loading</div>}
        {service.status === "loaded" && (
          <div>
            <FightersGrid fighters={service.payload} />
            <StartFight />
          </div>
        )}
        {service.status === "error" && (
          <div>Error, failed to retrieve the fighters</div>
        )}
      </div>
    </>
  );
};

export default Fighters;
