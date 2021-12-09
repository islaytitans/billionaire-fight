import { NextPage } from "next";
import Head from "next/head";
import FightersGrid from "../components/FightersGrid";
import useGetFightersService from "../services/useGetFightersService";
import SelectedFighters from "../components/SelectedFighters";
import PageTitle from "../components/PageTitle";
import StartFight from "../components/StartFight";

const Fighters: NextPage = () => {
  const service = useGetFightersService();

  return (
    <>
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col min-h-screen items-center">
          <PageTitle title="Select your fighters!" />
          {service.status === "loading" && <div>Loading</div>}
          {service.status === "loaded" && (
            <div>
              <FightersGrid fighters={service.payload} />
              <StartFight />
              <SelectedFighters />
            </div>
          )}
          {service.status === "error" && (
            <div>Error, failed to retrieve the fighters</div>
          )}
        </div>
      </main>
    </>
  );
};

export default Fighters;
