import {AnimatePresence, motion} from "framer-motion";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {Toaster, toast} from "react-hot-toast";
import DropDown, {VibeType} from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
// @ts-ignore
import {Portal} from 'react-portal';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next";

function removeCodeWrapping(str: string) {
    if (str.startsWith("```") && str.endsWith("```")) {
        return str.slice(3, -3);
    } else {
        return str;
    }
}

const Home: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [generatedCode, setGeneratedCode] = useState<any>("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { t } = useTranslation('common');

    const handleError = (e: Response) => {
        if (e.ok) {
            setError(false);
            return;
        } else {
            console.error(e.statusText);
            switch (e.status) {
                case 400:
                    setErrorMessage("There was an error with the request.");
                    break;
                case 500:
                    setErrorMessage("OpenAI API error.");
                    break;
                case 502:
                    setErrorMessage("Gateway error.");
                    break;
                case 503:
                    setErrorMessage("Service unavailable.");
                    break;
                default:
                    setErrorMessage("Something went wrong!");
            }
            setError(true);
            setLoading(false);
        }
    };

    const generateUI = async (e: any) => {
        e.preventDefault();
        setGeneratedCode("");
        setLoading(true);
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt,
            }),
        });
        console.log("Edge function returned.");

        handleError(response);

        // This data is a ReadableStream
        const data = response.body;
        if (!data) {
            return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;
        const {value, done: doneReading} = await reader.read();

        const code = removeCodeWrapping(decoder.decode(value))

        setGeneratedCode(code);
        setLoading(false);
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI to UI component generator</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <main className="flex flex-1 w-full flex-col items-center text-center px-4 mt-12 sm:mt-10">
                <a
                    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
                    href="https://github.com/yuvalsuede/ai-component-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github/>
                    <p>{t('starOnGithub')}</p>
                </a>
                <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
                    { t('askForAny')} <span style={{color: '#1A6292'}}>{t('component')}</span>

                </h1>
                <h2 className="sm:text-4xl text-4xl max-w-2xl font-bold text-slate-900  sm:mt-4">
                    {t('aiWillGenerateItForYou')}
                </h2>
                <div className="max-w-xl w-full">
                    <div className="flex mt-10 items-center space-x-3">
                        <p className="text-left font-medium">
                            {t('whichComponent')} {" "}
                        </p>
                    </div>
                    <textarea
                        value={prompt}
                        onChange={(e) => {
                          setPrompt(e.target.value);
                          setError(false);
                        }}
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
                        placeholder={t('exampleInput') || ''}
                    />

                    {!loading &&
                      (error ? (
                        <button
                          disabled={!prompt}
                          className="bg-red-600 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-red-700 w-full"
                          onClick={(e) => generateUI(e)}
                        >
                          <p>{errorMessage}</p>
                        </button>
                      ) : (
                        <button
                            disabled={!prompt}
                            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                            onClick={(e) => generateUI(e)}
                        >
                            {t('cta')}&rarr;
                        </button>
                    ))}
                    {loading && (
                        <button
                            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                            disabled
                        >
                            <LoadingDots color="white" style="large"/>
                        </button>
                    )}
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{duration: 2000}}
                />
                <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700"/>
                <ResizablePanel>
                    <AnimatePresence mode="wait">
                        <motion.div className="space-y-10 my-10">
                            {generatedCode && (
                                <>
                                    <div>
                                        <h2 className="sm:text-2xl text-2xl font-bold text-gray-500 font-normal mx-auto">
                                            There we go. Click to copy the code
                                        </h2>
                                    </div>
                                    <div
                                        className="space-y-8 flex flex-col items-center justify-center  mx-auto w-full">
                                        <div
                                            className="w-full whitespace-normal bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border max-w-full flex items-center justify-center"
                                            onClick={() => {
                                                navigator.clipboard.writeText(generatedCode);
                                                toast("Code copied to clipboard", {
                                                    icon: "✂️",
                                                });
                                            }}
                                        >
                                            <div dangerouslySetInnerHTML={{__html: generatedCode}}/>

                                        </div>
                                    </div>

                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;

// @ts-ignore
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
})
