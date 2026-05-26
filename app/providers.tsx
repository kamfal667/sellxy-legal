'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'fr' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  lang: 'fr',
  setLang: () => {},
  theme: 'light',
  toggleTheme: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = (localStorage.getItem('sellxy-lang') as Lang) || 'fr';
    const savedTheme = (localStorage.getItem('sellxy-theme') as Theme) || 'light';
    setLangState(savedLang);
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('sellxy-lang', l);
  };

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('sellxy-theme', next);
  };

  if (!mounted) return null;

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}
