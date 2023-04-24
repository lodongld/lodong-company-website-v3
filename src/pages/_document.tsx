import React, { FunctionComponent } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document: FunctionComponent = (): JSX.Element => {
  return (
    <Html lang="ko">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;