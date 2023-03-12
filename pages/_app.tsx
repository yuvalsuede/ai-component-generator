import {Analytics} from "@vercel/analytics/react";
import "../styles/globals.css";
import '../styles/animations.css';
import {GoogleAnalytics} from "nextjs-google-analytics";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
            <Analytics/>
        </>
    );
}

export default appWithTranslation(MyApp);
