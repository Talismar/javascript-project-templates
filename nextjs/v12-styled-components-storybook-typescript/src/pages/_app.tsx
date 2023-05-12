import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import StyleContext from "../contexts/StyleContext";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <StyleContext>
        <Component {...pageProps} />
      </StyleContext>
    </>
  );
};

export default MyApp;
