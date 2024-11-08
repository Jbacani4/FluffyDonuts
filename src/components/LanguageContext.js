import { createContext, useState } from "react";

// const texts = {
//     en: {
//         greeting: "WELCOME",
//         tagline: "PLANT-BASED, COFFEE, DONUTS & GOOD VIBES",
//         menu: ["HOME", "ABOUT", "CONTACT", "FR"],
//         about: ["Coffee is more than just a drink — it’s an art form. As a 3rd Wave café, each bean is ethically sourced and each cup is crafted with care for an elevated experience.", "Our deliciously fluffy, 100% plant-based doughnuts are made fresh daily from scratch, with love and using only natural, organic ingredients.", "From eco-friendly practices to local partnerships, we’re committed to creating a sustainable future and building a connected community."],
//         contact: ["HOURS", "ADDRESS", "EMAIL", "PHONE"]
//     },
//     fr: {
//         greeting: "BIENVENUE",
//         tagline: "",
//         menu: ["ACCUEIL", "À PROPOS", "CONTACT", "EN"],
//         about: "",
//         contact:""
//     }
// };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;