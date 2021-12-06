import { NextPage } from "next";
import Head from "next/head";
import Fighter from "../types/figher";
import FighterItem from "../components/FighterItem";
import useGetFightersService from "../services/useGetFightersService";

const Fighters: NextPage = () => {
  const service = useGetFightersService();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {service.status === "loading" && <div>Loading</div>}
        {service.status === "loaded" &&
          service.payload.map((fighter: Fighter) => (
              <FighterItem key={fighter.id} fighter={fighter} />
          ))}
        {service.status === "error" && (
          <div>Error, failed to retrieve the fighters</div>
        )}
      </div>
    </div>
  );
};

export default Fighters;
