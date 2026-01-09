import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v16-pagesRouter";
import { NextPage } from "next";
import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { roboto, theme } from "src/components/foundation";

const Document: NextPage<DocumentHeadTagsProps> = async (props) => {
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        <DocumentHeadTags {...props} />
        <link rel="icon" href="/pentahire.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <meta name="emotion-insertion-point" content="" />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
