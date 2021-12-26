import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import GameProvider from "../providers/GameProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GameProvider>
  );
}

export default MyApp;
