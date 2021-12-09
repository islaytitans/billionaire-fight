import { FC, Fragment } from "react";
import Header from "../Header";
import GameProvider from "../../providers/GameProvider";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <GameProvider>{children}</GameProvider>
    </Fragment>
  );
};

export default Layout;
