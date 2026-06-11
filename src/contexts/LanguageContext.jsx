import { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const trans = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "lt" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, trans, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
