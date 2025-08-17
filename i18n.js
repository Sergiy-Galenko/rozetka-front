import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUk from "./locales/uk/translation.json";
import translationEn from "./locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: translationUk },
      en: { translation: translationEn },
    },
    lng: "uk", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n; 