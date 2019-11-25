
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

i18n
    .use(initReactI18next)
    .use(XHR)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en', // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        backend: {
          loadPath: '/locales/{{lng}}.json',
        },
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations'
    });

export default i18n;
