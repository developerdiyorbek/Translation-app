"use client";

import { Film, Logs } from "lucide-react";
import { Card } from "../ui/card";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../providers/LanguageProvider";
import { languages } from "@/constants/languages";
import SearchComponent from "./SearchComponent";

function Hero() {
  const { fromLanguage, toLanguage } = useLanguage();

  const fromLanguageName = languages.find(
    (lng) => lng.code === fromLanguage
  )?.name;

  const toLanguageName = languages.find((lng) => lng.code === toLanguage)?.name;

  return (
    <div>
      <div className="text-center space-y-4 mb-4">
        <h2 className="text-3xl font-bold">Translate words and expressions</h2>
        <div>
          <span className="text-muted-foreground">from {fromLanguageName}</span>{" "}
          - <span className="text-main">to {toLanguageName}</span>
        </div>
      </div>

      <Card className="p-6 mb-8">
        <LanguageSelector />

        <SearchComponent />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 bg-main/80 text-white rounded-lg">
              <Logs className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Vocabulary lists</h3>
          </div>
        </Card>
        <Card className="p-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 bg-main/80 text-white rounded-lg">
              <Film className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">Learn with movies</h3>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Hero;
