import { NextPage } from "next";
import Head from "next/head";
import FightersGrid from "../components/FightersGrid";
import useGetFightersService from "../services/useGetFightersService";
import Header from "../components/Header";
import { PlayersContext, defaultPlayerState } from "../context/PlayersContext";
import SelectedFighters from "../components/SelectedFighters";

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
        <PlayersContext.Provider value={defaultPlayerState}>
          <div className="flex min-h-screen justify-center items-center">
            {service.status === "loading" && <div>Loading</div>}
            {service.status === "loaded" && (
              <div>
                <FightersGrid fighters={service.payload} />
                <SelectedFighters />
              </div>
            )}
            {service.status === "error" && (
              <div>Error, failed to retrieve the fighters</div>
            )}
          </div>
        </PlayersContext.Provider>
      </main>
    </div>
  );
};

export default Fighters;
