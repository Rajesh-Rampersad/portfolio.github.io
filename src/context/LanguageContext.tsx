'use strict';
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';
import { TranslatedString } from '@/types';

type Language = 'es' | 'en' | 'pt';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['es']) => string;
  tProject: (field: TranslatedString) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  // Securely load initial preference on client hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('rajesh_portfolio_lang') as Language;
      if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'pt')) {
        setLanguageState(savedLang);
      } else {
        // Auto-detect browser language if no preference saved
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === 'pt') setLanguageState('pt');
        else if (browserLang === 'en') setLanguageState('en');
        else setLanguageState('es');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rajesh_portfolio_lang', lang);
    }
  };

  // Safe translation picker
  const t = (key: keyof typeof translations['es']): string => {
    const dict = translations[language] || translations['es'];
    return (dict[key] || translations['es'][key] || '') as string;
  };

  // Safe project string translator
  const tProject = (field: TranslatedString): string => {
    if (!field) return '';
    return field[language] || field['es'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tProject }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
