
import { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

type Translations = {
  [key: string]: {
    pt: string;
    en: string;
  };
};

// Traduções básicas iniciais
const translations: Translations = {
  // Navbar
  "inicio": { pt: "Início", en: "Home" },
  "projetos": { pt: "Projetos", en: "Projects" },
  "habilidades": { pt: "Habilidades", en: "Skills" },
  "contato": { pt: "Contato", en: "Contact" },
  "downloadCv": { pt: "Download CV", en: "Download CV" },
  
  // Footer
  "desenvolvedor": { pt: "Desenvolvedor Full Stack com foco em Front-end", en: "Full Stack Developer focusing on Front-end" },
  "direitos": { pt: "Todos os direitos reservados", en: "All rights reserved" },
  "termos": { pt: "Termos de Uso", en: "Terms of Use" },
  "privacidade": { pt: "Política de Privacidade", en: "Privacy Policy" },
  
  // Tema
  "temaClaro": { pt: "Tema Claro", en: "Light Mode" },
  "temaEscuro": { pt: "Tema Escuro", en: "Dark Mode" },
  
  // Idioma
  "portugues": { pt: "Português", en: "Portuguese" },
  "ingles": { pt: "Inglês", en: "English" }
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    return savedLanguage || "pt";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
