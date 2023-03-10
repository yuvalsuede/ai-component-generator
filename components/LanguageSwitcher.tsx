import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import {useEffect} from "react";

const LanguageSwitcher = () => {
    const router = useRouter();
    const { t } = useTranslation('en');
    const flagSrc = router.locale === 'en' ? '/images/us.png' : '/images/spain.png';
    const flagAlt = router.locale === 'en' ? t('english') : t('spanish');

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = event.target.value;
        console.log({locale})
        router.push(router.pathname, router.asPath, { locale });
    };
    useEffect(() => {
        console.log(flagSrc);
    }, [flagSrc])
    return (
        <div className="relative mr-4">
            <select
                value={router.locale}
                onChange={changeLanguage}
                className="appearance-none bg-transparent border-none outline-none shadow-none focus-none pl-10 focus:outline-none "
            >
                <option value="en">{t('english')}</option>
                <option value="es">{t('spanish')}</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image src={flagSrc} alt={flagAlt} width={20} height={20} />
            </div>

        </div>
    );
};

export default LanguageSwitcher;
