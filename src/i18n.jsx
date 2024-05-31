import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import langEN from "./data/en/general.json"
import langID from "./data/id/general.json"
import portfolioEN from "./data/en/portfolio.json"
import portfolioID from "./data/id/portfolio.json"

const resources = {
    en: {
        general: langEN,
        port: portfolioEN
    },
    id: {
        general: langID,
        port: portfolioID
    }
}
const lang = localStorage.getItem("lang") || "en"

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: lang,
        fallbackLng: "en",
        ns: ['general', 'port'],
        defaultNS: 'general',
        interpolation: {
            escapeValue: false
        }
    })
export default i18n;