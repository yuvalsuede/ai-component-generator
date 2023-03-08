import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { AppProps } from "next/app";
import { DarkModeProvider } from "../components/darkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GoogleAnalytics trackPageViews />
			<DarkModeProvider>
				<Component {...pageProps} />
			</DarkModeProvider>
			<Analytics />
		</>
	);
}

export default MyApp;
