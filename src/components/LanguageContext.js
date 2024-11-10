import { createContext, useState } from "react";
import { texts } from "../assets/data";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, texts}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;