import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@theme/stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="apple-touch-icon.png" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: ` var DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__; if (typeof DEV_TOOLS === "object") DEV_TOOLS.inject = function () {}; `,
            }}
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
