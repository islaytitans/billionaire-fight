import { FC, Fragment } from "react";
import Header from "../Header";
import PlayersProvider from "../../providers/PlayersProvider";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <PlayersProvider>{children}</PlayersProvider>
    </Fragment>
  );
};

export default Layout;
