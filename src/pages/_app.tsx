import { AppCacheProvider } from "@mui/material-nextjs/v16-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { theme } from "src/components/foundation";
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getNewQueryClient } from "src/utils/helpers";

const App: React.FC<AppProps> = (props) => {
  const [queryClient] = React.useState(() => getNewQueryClient());
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "rgb(253, 236, 234)",
              color: "rgb(97, 26, 21)",
              fontFamily: "Roboto",
            },
          },
          success: {
            style: {
              background: "rgb(237, 247, 237)",
              color: "rgb(30, 70, 32)",
              fontFamily: "Roboto",
            },
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </HydrationBoundary>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
