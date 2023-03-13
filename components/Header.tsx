import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslation} from "next-i18next";

export default function Header() {
    const { t } = useTranslation('common');

    return (
        <header className="flex justify-between items-center w-full mt-2 border-b pb-3 sm:px-4 px-2">
            <Link href="/" className="flex space-x-3">
                <h1 className="sm:text-2xl text-1xl font-normal ml-2 tracking-tight">
                    ChatGPT AI <span style={{color: '#1A6292'}}>{t('componentGenerator')}  </span>
                </h1>
            </Link>
            <div className="flex flex-row">
                <LanguageSwitcher/>
            </div>

        </header>
    );
}
