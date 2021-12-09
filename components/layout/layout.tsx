import { FC, Fragment, useContext } from "react";
import Header from "../Header";
import GameProvider from "../../providers/GameProvider";
import useGetFightersService from "../../services/useGetFightersService";
import { GameContext } from "../../context/GameContext";

const Layout: FC = ({ children }) => {
  const service = useGetFightersService();
  const Game = useContext(GameContext);

  if (service.status === "loading") {
    return <div>Loading...</div>;
  }
  if (service.status === "error") {
    return <div>Failed to load fighters</div>;
  }

  if (service.status === "loaded") {
    console.log(service.payload);
    Game.roster.updateFighters(service.payload);
    console.log("hi");
    console.log(Game.roster.fighters);
  }

  return (
    <Fragment>
      <Header />
      <GameProvider>{children}</GameProvider>
    </Fragment>
  );
};

export default Layout;
