import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: { translation: { dashboard: 'Dashboard', calendar: 'Calendar', users: 'Users', signin: 'Sign in' } },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({ resources, fallbackLng: 'en', interpolation: { escapeValue: false } })

export default i18n


