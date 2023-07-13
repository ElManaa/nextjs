import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

import "@/styles/bootstrap.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily} !important;
          }
        `}
      </style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
