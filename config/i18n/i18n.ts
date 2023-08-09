import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { CLASS_EN, HOME_EN, LESSON_EN, SHARED_EN, PROFILE_EN, QUESTION_EN, CONSTANT_EN, YUP_MESSAGE_EN, SYSTEM_MANAGEMENT_EN } from '../locales/en/translateEN';
import { CLASS_VI, HOME_VI, LESSON_VI, SHARED_VI, PROFILE_VI, QUESTION_VI, CONSTANT_VI, YUP_MESSAGE_VI, SYSTEM_MANAGEMENT_VI } from '../locales/vi/translateVI';

const resources = {
    en: {
        class: CLASS_EN,
        home: HOME_EN,
        lesson: LESSON_EN,
        shared: SHARED_EN,
        profile: PROFILE_EN,
        question: QUESTION_EN,
        constant: CONSTANT_EN,
        yupMessage: YUP_MESSAGE_EN,
        systemManagement: SYSTEM_MANAGEMENT_EN,
    },
    vi: {
        class: CLASS_VI,
        home: HOME_VI,
        lesson: LESSON_VI,
        shared: SHARED_VI,
        profile: PROFILE_VI,
        question: QUESTION_VI,
        constant: CONSTANT_VI,
        yupMessage: YUP_MESSAGE_VI,
        systemManagement: SYSTEM_MANAGEMENT_VI,
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources,
        fallbackLng: localStorage.getItem('lang') && (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'vi') ? localStorage.getItem('lang') : 'en',
        lng: localStorage.getItem('lang') && (localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === 'vi') ? localStorage.getItem('lang') : 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
