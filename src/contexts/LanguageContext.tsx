import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt-BR' | 'en';

type Translations = {
  [key: string]: {
    'pt-BR': string;
    en: string;
  };
};

// Traduções básicas iniciais
const translations: Translations = {
  // Navbar
  inicio: { 'pt-BR': 'Início', en: 'Home' },
  projetos: { 'pt-BR': 'Projetos', en: 'Projects' },
  habilidades: { 'pt-BR': 'Habilidades', en: 'Skills' },
  contato: { 'pt-BR': 'Contato', en: 'Contact' },
  downloadCv: { 'pt-BR': 'Download CV', en: 'Download CV' },

  // Footer
  desenvolvedor: {
    'pt-BR':
      'Desenvolvedor Web focado em soluções escaláveis, com forte impacto em performance e geração de valor',
    en: 'Web Developer focused on scalable solutions, with strong impact on performance and value creation',
  },

  direitos: {
    'pt-BR': 'Todos os direitos reservados',
    en: 'All rights reserved',
  },
  termos: { 'pt-BR': 'Termos de Uso', en: 'Terms of Use' },
  privacidade: { 'pt-BR': 'Política de Privacidade', en: 'Privacy Policy' },

  // Tema
  temaClaro: { 'pt-BR': 'Tema Claro', en: 'Light Mode' },
  temaEscuro: { 'pt-BR': 'Tema Escuro', en: 'Dark Mode' },

  // Idioma
  portugues: { 'pt-BR': 'Português', en: 'Portuguese' },
  ingles: { 'pt-BR': 'Inglês', en: 'English' },
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Verificar se existe um idioma no prefixo da URL
    const pathLanguage = window.location.pathname.split('/')[1];
    if (pathLanguage === 'en' || pathLanguage === 'pt-BR') {
      return pathLanguage as Language;
    }
    // Se não houver prefixo, define pt-BR por padrão
    return 'pt-BR';
  });

  useEffect(() => {
    // Atualizar idioma conforme a URL muda
    const pathLanguage = window.location.pathname.split('/')[1];
    if (pathLanguage === 'en' || pathLanguage === 'pt-BR') {
      setLanguage(pathLanguage as Language);
    }
  }, [window.location.pathname]);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt-BR' ? 'en' : 'pt-BR';
    setLanguage(newLanguage);

    // Atualizar a URL mantendo o idioma corretamente
    const currentPath = window.location.pathname;
    const newPathname = currentPath.startsWith('/en') || currentPath.startsWith('/pt-BR')
      ? currentPath.replace(/^\/(en|pt-BR)/, `/${newLanguage}`) // Substitui o prefixo de idioma
      : `/${newLanguage}${currentPath}`; // Se não houver prefixo, adiciona o novo

    // Atualizar a URL sem recarregar a página
    window.history.pushState({}, '', newPathname);
  };

  // Função para traduzir textos
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
