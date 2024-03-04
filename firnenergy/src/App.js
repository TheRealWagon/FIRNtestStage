import { useState } from 'react';
import './App.css';
import { LoginPage, HomePage, WebsiteHomePage, WebAdminPage , ProfielPage} from './components/pages/pages'
import { Routes, Route, Router} from "react-router-dom";
import { useTranslation  } from 'react-i18next';
import i18n from "i18next"
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en.json'
import frTranslation from './locales/fr.json'
i18n
.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources:{
            en:{
                translation:enTranslation
            },
            fr:{
                translation : frTranslation
            }
        },
        fallbackLng: 'en',
        interpollation:{
            escapeValue: false
        }
    })
function App() {
    // const { t , i18n } = useTranslation();
    // i18n.on('languageChanged', (lng) => (document.documentElement.setAttribute('lang', lng)))
    // const [darkMode, setDarkmode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkmode(!darkMode);
    // }

  return (
      <Routes>
          <Route path="/" element={<WebsiteHomePage />} />
      </Routes>
  );
}

export default App;
