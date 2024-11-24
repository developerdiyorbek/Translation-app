"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { languagesObj } from "@/constants/languages";
import { Volume2 } from "lucide-react";
import { useParams } from "next/navigation";
import { Fragment } from "react";

const sentences = [
  {
    text: "I plan to go skiing with my girlfriend.",
    highlight: "go",
  },
  {
    text: "I'd love to go fishing with you.",
    highlight: "go",
  },
  {
    text: "None of us plan to go swimming today.",
    highlight: "go",
  },
];

type LanguageCode = keyof typeof languagesObj;

function TranslationPageComponent() {
  const params = useParams();

  const { "fromLng]-[toLng": combinedLng, query } = params;

  const [fromLng, toLng] = (
    typeof combinedLng === "string" ? combinedLng : ""
  ).split("-");

  const queryString = params.query ? decodeURIComponent(query as string) : "";

  const playPronunciation = () => {
    const text = new SpeechSynthesisUtterance(queryString);
    text.lang = "en-US";
    speechSynthesis.speak(text);
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold text-blue-600">{queryString}</p>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-blue-50"
          onClick={playPronunciation}
        >
          <Volume2 className="h-5 w-5 text-blue-600" />
          <span className="sr-only">Play pronunciation</span>
        </Button>
      </div>
      <p className="text-gray-600 text-lg mb-4">
        from {languagesObj[fromLng as LanguageCode]} - to{" "}
        {languagesObj[toLng as LanguageCode]}
      </p>
      <Tabs defaultValue="definition" className="w-full max-w-2xl">
        <TabsList className="w-full justify-start h-12 bg-transparent border-b rounded-none p-0 mb-2">
          <TabsTrigger
            value="definition"
            className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:shadow-none"
          >
            Definition
          </TabsTrigger>
          <TabsTrigger
            value="synonyms"
            className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:shadow-none"
          >
            Synonyms
          </TabsTrigger>
          <TabsTrigger
            value="translation"
            className="h-12 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:shadow-none"
          >
            Translation
          </TabsTrigger>
        </TabsList>
        <TabsContent value="definition" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant={"outline"}>Noun</Badge>
              <Badge variant={"outline"}>Verb</Badge>
              <Badge variant={"outline"}>Adjective</Badge>
            </div>

            <div className="space-y-8">
              {sentences.map((sentence, index) => (
                <div
                  key={index}
                  className="relative border-b border-dashed border-gray-300 py-1"
                >
                  <p className="text-blue-600 text-xl">
                    {sentence.text
                      .split(sentence.highlight)
                      .map((part, i, arr) => (
                        <Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="bg-yellow-200 px-0.5 rounded">
                              {sentence.highlight}
                            </span>
                          )}
                        </Fragment>
                      ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="synonyms">
          <p className="text-gray-600">hi, hey, greetings, good day</p>
        </TabsContent>
        <TabsContent value="translation">
          <p className="text-gray-600">Select a language</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TranslationPageComponent;
