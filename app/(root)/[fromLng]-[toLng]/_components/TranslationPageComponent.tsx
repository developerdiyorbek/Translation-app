"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2 } from "lucide-react";
import { useParams } from "next/navigation";

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
        from {fromLng} - to {toLng}
      </p>
      <Tabs defaultValue="definition" className="w-full max-w-2xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="definition">Definition</TabsTrigger>
          <TabsTrigger value="synonyms">Synonyms</TabsTrigger>
          <TabsTrigger value="translation">Translation</TabsTrigger>
        </TabsList>
        <TabsContent value="definition" className="mt-4 space-y-4">
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              noun
            </span>
            <div className="mt-3">
              <p className="text-gray-600">
                <span className="text-gray-400 italic">(communication)</span>{" "}
                greeting used when meeting someone
              </p>
              <p className="text-gray-500 mt-2 text-sm italic">
                She waved and said a cheerful hello
              </p>
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
