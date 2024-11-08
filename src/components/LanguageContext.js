import { createContext, useState } from "react";



const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('eng'); // Default language

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'eng' ? 'fr' : 'eng'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;