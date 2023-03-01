import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TRANSLATIONS_ARAB from "./assets/lang/ar.json";
import TRANSLATIONS_EN from "./assets/lang/en.json";
import TRANSLATIONS_FR from "./assets/lang/fr.json";
import TRANSLATIONS_SP from "./assets/lang/sp.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      ar: {
        translation: TRANSLATIONS_ARAB,
      },
      fr: {
        translation: TRANSLATIONS_FR,
      },
      sp: {
        translation: TRANSLATIONS_SP,
      },
    },
    fallbackLng: "en",
  });
  export default i18n;