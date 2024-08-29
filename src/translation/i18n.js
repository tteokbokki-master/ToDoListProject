import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko/translation.json';
import en from './en/translation.json';

const resources = {
  ko: {
    translation: ko,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
