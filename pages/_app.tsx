import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Head from "next/head";
import { IdProvider } from "@radix-ui/react-id";
import { ThemeProvider } from "next-themes";
import { globalStyles } from "@theme/globalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <IdProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </IdProvider>
  );
};

export default App;
