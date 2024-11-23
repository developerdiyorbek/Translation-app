"use client";

import { languages } from "@/constants/languages";
import { ChildProps, Language } from "@/types";
import { createContext, useContext, useState } from "react";

type LanguageContextType = {
  languages: Language[];
  fromLanguage: string;
  toLanguage: string;
  setFromLanguage: (language: string) => void;
  setToLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LanguageProvider = ({ children }: ChildProps) => {
  const [fromLanguage, setFromLanguage] = useState<string>("uz");
  const [toLanguage, setToLanguage] = useState<string>("ru");

  return (
    <LanguageContext.Provider
      value={{
        languages,
        fromLanguage,
        toLanguage,
        setFromLanguage,
        setToLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
