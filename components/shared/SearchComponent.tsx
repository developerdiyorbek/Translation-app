"use client";

import { KeyboardIcon, Search, X } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
import { useLanguage } from "../providers/LanguageProvider";
import { toast } from "sonner";

function SearchComponent() {
  const [inputValue, setInputValue] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [layout, setLayout] = useState("default");
  const ref = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const { fromLanguage, toLanguage } = useLanguage();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleKeyPress = (button: string) => {
    if (button === "{bksp}") {
      setInputValue((prev) => prev.slice(0, -1));
    } else if (button === "{enter}") {
      setInputValue((prev) => prev + "\n");
    } else {
      setInputValue((prev) => prev + button);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      router.push(`${fromLanguage}-${toLanguage}/${inputValue.trim()}`);
    } else {
      toast.warning("Write something!");
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Textarea
          placeholder="Search for a word, an expression or enter a long text"
          className="pr-16"
          ref={ref}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          size="sm"
          className="absolute bottom-1 right-14 max-md:hidden block"
          onClick={() => setShowKeyboard(!showKeyboard)}
        >
          <KeyboardIcon />
        </Button>
        <Button
          size="sm"
          onClick={handleSearch}
          className="absolute top-1/2 -translate-y-1/2 right-2 max-h-[50px] h-full"
        >
          <Search />
        </Button>
      </div>
      {showKeyboard && (
        <div className="absolute w-full max-w-2xl top-16 left-1/2 -translate-x-1/2 bg-white shadow-lg">
          <div className="flex justify-between">
            <Select
              onValueChange={(value) => setLayout(value)}
              defaultValue="default"
            >
              <SelectTrigger className="w-32 h-[30px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">English</SelectItem>
                <SelectItem value="uzbek">Uzbek</SelectItem>
                <SelectItem value="russian">Russian</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-1">
              <Button
                variant={"outline"}
                onClick={() => setInputValue("")}
                size={"sm"}
              >
                Clear
              </Button>
              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={() => setShowKeyboard(false)}
              >
                <X />
              </Button>
            </div>
          </div>
          <Keyboard
            onKeyPress={handleKeyPress}
            layoutName={layout}
            layout={{
              default: [
                "q w e r t y u i o p",
                "a s d f g h j k l",
                "z x c v b n m {bksp}",
              ],
              uzbek: [
                "q e r t y u i o p",
                "a s d f g h j k l",
                "z x c v b n m oʻ {bksp}",
              ],
              russian: [
                "й ц у к е н г ш щ з х ъ",
                "ф ы в а п р о л д ж э",
                "я ч с м и т ь б ю {bksp}",
              ],
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
