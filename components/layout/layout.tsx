import { FC, Fragment, useContext, useEffect } from "react";
import Header from "../global/Header";
import useGetFightersService from "../../services/useGetFightersService";
import { GameContext } from "../../context/GameContext";

const Layout: FC = ({ children }) => {
  const service = useGetFightersService();
  const Game = useContext(GameContext);

  useEffect(() => {
    if (service.status === "loaded") {
      Game.roster.updateFighters(service.payload);
    }
  }, [Game.roster, service.status]);

  if (service.status === "loading") {
    return <div>Loading...</div>;
  }
  if (service.status === "error") {
    return <div>Failed to load fighters</div>;
  }

  return (
    <Fragment>
      <Header />
      <main className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">{children}</main>
    </Fragment>
  );
};

export default Layout;
