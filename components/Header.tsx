import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "next-i18next";
import {useEffect} from "react";
import TweetButton from "./TweetButton";

export default function Header() {
    const { t, i18n } = useTranslation('common');

    return (
        <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
            <Link href="/" className="flex space-x-3">
                <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
                    ChatGPT AI <span style={{color: '#1A6292'}}>{t('componentGenerator')}  </span>
                </h1>
            </Link>
            <div className="flex flex-row">
                <LanguageSwitcher/>
                <a
                    href="https://www.linkedin.com/in/yuval-suede/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        alt="ChatGPT Icon"
                        src="/me.png"
                        className="sm:w-10 sm:h-[40px] w-10 h-[40px] rounded-full"
                        width={32}
                        height={28}
                    />
                </a>
            </div>

        </header>
    );
}
