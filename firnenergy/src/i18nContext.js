// src/i18nContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('fr');

  return (
    <I18nContext.Provider value={{ locale, setLocale}}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);