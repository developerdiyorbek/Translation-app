import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b mb-16 max-md:mb-8 sticky top-0 bg-white">
      <div className="container mx-auto max-md:px-3 flex items-center justify-between h-16 max-w-6xl">
        <div className="flex items-center space-x-6">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-primary">Translator</h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Page 1</Button>
            <Button variant="ghost">Page 2</Button>
          </nav>
        </div>
        <Link href={"/auth"}>
          <Button className="font-semibold">Log in</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
