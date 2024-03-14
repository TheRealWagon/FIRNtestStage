// src/components/LanguageSwitcher.js
import React from 'react';
import { useI18n } from './i18nContext';

const LanguageSwitcher = () => {
  const { setLocale } = useI18n();

  return (
    <div>
      <button onClick={() => setLocale('en')}>English</button>
      <button onClick={() => setLocale('fr')}>Frans</button>
    </div>
  );
};

export default LanguageSwitcher;