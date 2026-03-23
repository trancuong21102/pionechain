import i18next, { InitOptions, Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationVI from "../locales/vi/translation.json";
import translationZH from "../locales/zh/translation.json";
import translationJA from "../locales/ja/translation.json";
import translationKO from "../locales/ko/translation.json";
import translationFR from "../locales/fr/translation.json";
import translationES from "../locales/es/translation.json";

const resources: Resource = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  zh: { translation: translationZH },
  ja: { translation: translationJA },
  ko: { translation: translationKO },
  fr: { translation: translationFR },
  es: { translation: translationES },
};

// Kiểm tra localStorage (phải check window để tránh lỗi SSR)
const options: InitOptions = {
  lng: "en", 
  fallbackLng: "en",
  debug: true,
  resources,
};

i18next.use(initReactI18next).init(options);

export default i18next;
