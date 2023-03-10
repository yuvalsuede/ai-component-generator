// i18n.ts
import { i18n } from 'next-i18next';
import path from 'path';

// @ts-ignore
export default i18n({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales'),
    interpolation: {
        escapeValue: false,
    },
});
