import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next";
import RoundFilledNumber from "../components/RoundFilledNumber";
import ExportSelection from "../components/ExportSelection";
import { useChatGPT } from "../hooks/useChatGPT";

const Home: NextPage = () => {
    const [prompt, setPrompt] = useState("");
    const { exportedGeneratedCode, isLoading, generatedCode, generateUI, restart, setSelectedExport } = useChatGPT(() => setPrompt(""));
    const {t} = useTranslation('common');

    const handleSelectedExport = (option: string) => {
        setSelectedExport(option)
    }

    return (
        <div className="flex w-full mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI to UI component generator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDU2IDEwMCBIIDAgTCAwIDAgTCA1NiAwIEwgNTYgMTAwIE0gMjggMTAwIE0gMjggMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />
                </div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left space-y-4 max-w-2xl">
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                                    Get this domain and app now!
                                </h2>
                            </div>
                            <p className="text-indigo-100 text-base sm:text-lg md:text-xl">
                                Don't miss out on this opportunity to make it yours and start your journey to success!
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <a
                                href="https://www.linkedin.com/in/yuval-suede/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Contact on LinkedIn
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
            </div>
            <main className="flex flex-1 w-full flex-col items-center text-center px-4 mt-12 sm:mt-10">
                <a
                    className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5 animate-wobble"
                    href="https://github.com/yuvalsuede/ai-component-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github />
                    <p>{t('starOnGithub')}</p>
                </a>


                <h1 className="sm:text-3xl text-2xl max-w-1xl font-normal text-slate-900">
                    {t('askForAny')} <span style={{color: '#1A6292'}}>{t('component')}</span>
                </h1>
                <h2 className="sm:text-xl text-xl max-w-1xl font-light text-gray-600  sm:mt-2">
                    {t('aiWillGenerateItForYou')}
                </h2>

                <div className="max-w-xl w-full">
                    <div className="flex mt-10 items-center space-x-3">
                        <RoundFilledNumber number={1}/>
                        <p className="text-left font-medium flex align-center">
                            {t('whichComponent')} {" "}
                        </p>
                    </div>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
                        placeholder={t('exampleInput') || ''}
                    />
                    <div className="flex mt-2 items-center space-x-3">
                        <RoundFilledNumber number={2}/>
                        <p className="text-left font-medium flex align-center">
                            {t('whichPL')} {" "}
                        </p>
                    </div>

                    <div className="w-full flex justify-start mt-4">
                        <ExportSelection onSelectedExport={handleSelectedExport}/>

                    </div>

                    {!isLoading && (<>
                        <button
                            disabled={!prompt}
                            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                            onClick={(e) => {
                                e.preventDefault();
                                generateUI(prompt);
                            }}
                        >
                            {t('cta')}&rarr;
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                restart();
                            }}>
                            {t('reset')}
                        </button>
                    </>
                    )}
                    {isLoading && (
                        <button
                            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
                            disabled
                        >
                            <LoadingDots color="white" style="large" />
                        </button>
                    )}
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{ duration: 2000 }}
                />
                <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
                <ResizablePanel>
                    <AnimatePresence mode="wait">
                        <motion.div className="space-y-10 my-10">
                            {generatedCode && (
                                <>
                                    <div>
                                        <h2 className="sm:text-1xl text-1xl font-normal text-gray-600 font-normal mx-auto">
                                            Click the element to copy the code 👇
                                        </h2>
                                    </div>
                                    <div
                                        className="space-y-8 flex flex-col items-center justify-center  mx-auto w-full">
                                        <div
                                            className="w-full whitespace-normal bg-white rounded-xl p-4 hover:bg-gray-100 transition cursor-copy max-w-full flex items-center justify-center"
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    exportedGeneratedCode
                                                );
                                                toast(
                                                    "Code copied to clipboard",
                                                    {
                                                        icon: "✂️",
                                                    }
                                                );
                                            }}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: generatedCode,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </ResizablePanel>
            </main>
            <Footer />
        </div>
    )
        ;
};

export default Home;

// @ts-ignore
export const getStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
})
