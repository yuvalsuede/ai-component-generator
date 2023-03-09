import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
