import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Convert any Javascript code into TypeScript with ChatGPT in seconds."
          />
          <meta property="og:site_name" content="js2ts.com" />
          <meta
            property="og:description"
            content="Convert any Javascript code into TypeScript with ChatGPT in seconds."
          />
          <meta property="og:title" content="Javascript to Typescript converter with ChatGPT" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Javascript to Typescript converter with ChatGPT" />
          <meta
            name="twitter:description"
            content="Convert any Javascript code into TypeScript with ChatGPT in seconds."
          />
          <meta
            property="og:image"
            content="https://js2ts.com/og-image-2.png"
          />
          <meta
            name="twitter:image"
            content="https://js2ts.com/og-image-2.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
