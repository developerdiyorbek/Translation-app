import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}
