import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter } from "next/font/google"; 

import "@/styles/bootstrap.scss"
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.scss";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily} !important;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
