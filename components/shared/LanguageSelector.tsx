"use client";

import { useLanguage } from "../providers/LanguageProvider";
import { Button } from "../ui/button";
import { ArrowLeftRight } from "lucide-react";
import SelectComponent from "./SelectComponent";

const LanguageSelector = () => {
  const {
    languages,
    fromLanguage,
    toLanguage,
    setFromLanguage,
    setToLanguage,
  } = useLanguage();

  const availableToLanguages = languages.filter(
    (lang) => lang.code !== fromLanguage
  );

  const availableFromLanguages = languages.filter(
    (lang) => lang.code !== toLanguage
  );

  const currentFromLanguage = languages.find(
    (lang) => lang.code === fromLanguage
  );

  const currentToLanguage = languages.find((lang) => lang.code === toLanguage);

  return (
    <div className="flex sm:gap-4 sm:items-end sm:justify-center mb-5 max-sm:flex-col gap-1">
      <SelectComponent
        label="From"
        currentLanguage={currentFromLanguage}
        language={fromLanguage}
        setLanguage={setFromLanguage}
        languages={availableFromLanguages}
      />

      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => {
          const temp = fromLanguage;
          setFromLanguage(toLanguage);
          setToLanguage(temp);
        }}
        className="p-2 hover:bg-main hover:text-white transition-all duration-200"
      >
        <ArrowLeftRight />
      </Button>

      <SelectComponent
        label="To"
        currentLanguage={currentToLanguage}
        language={toLanguage}
        setLanguage={setToLanguage}
        languages={availableToLanguages}
      />
    </div>
  );
};

export default LanguageSelector;
