import { useState } from 'react';
import './App.css';
import { LoginPage, HomePage, WebsiteHomePage, WebAdminPage , ProfielPage} from './components/pages/pages'
import { Routes, Route, Router} from "react-router-dom";
import { useTranslation  } from 'react-i18next';


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
