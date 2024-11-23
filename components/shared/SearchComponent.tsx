"use client";

import { KeyboardIcon, Search, X } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function SearchComponent() {
  const [input, setInput] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleKeyPress = (button: string) => {
    if (button === "{bksp}") {
      setInput((prev) => prev.slice(0, -1));
    } else if (button === "{enter}") {
      setInput((prev) => prev + "\n");
    } else {
      setInput((prev) => prev + button);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Textarea
          placeholder="Search for a word, an expression or enter a long text"
          className="pr-16"
          ref={ref}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          size="sm"
          className="absolute bottom-1 right-14"
          onClick={() => setShowKeyboard(!showKeyboard)}
        >
          <KeyboardIcon />
        </Button>
        <Button
          size="sm"
          className="absolute top-1/2 -translate-y-1/2 right-2 max-h-[50px] h-full"
        >
          <Search />
        </Button>
      </div>
      {showKeyboard && (
        <div className="absolute w-full max-w-2xl top-16 left-1/2 -translate-x-1/2 bg-white shadow-lg">
          <div className="text-end">
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={() => setShowKeyboard(false)}
            >
              <X />
            </Button>
          </div>
          <Keyboard
            onKeyPress={handleKeyPress}
            layout={{
              default: [
                "q w e r t y u i o p",
                "a s d f g h j k l",
                "z x c v b n m {bksp}",
              ],
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
