import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="AI component Generator by Yuval Suede"
          />
          <meta property="og:site_name" content="ai2ui.co" />
          <meta
            property="og:description"
            content="Generate any UI component in seconds."
          />
          <meta property="og:title" content="UI component generator with ChatGPT" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Generate any UI component in seconds." />
          <meta
            name="twitter:description"
            content="Generate any UI component in seconds."
          />
          <meta
            property="og:image"
            content="https://ai2ui.co/og-image-3.png"
          />
          <meta
            name="twitter:image"
            content="https://ai2ui.co/og-image-3.png"
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
