import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../Language/locales/en/translation.json";
import translationFR from "../Language/locales/fr/translation.json";
import translationRU from "../Language/locales/ru/translation.json";
import translationAR from "../Language/locales/ar/translation.json";
import translationHE from "../Language/locales/he/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "fr", "ru", "ar", "he"];

const resources = {
  en: {
    translation: translationEN
  },

  fr: {
    translation: translationFR
  },
  ru: {
    translation: translationRU
  },
  ar: {
    translation: translationAR
  },
  he: {
    translation: translationHE
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
  });



export default i18n;
