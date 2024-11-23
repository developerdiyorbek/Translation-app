import { Language } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

interface Props {
  label: "From" | "To";
  languages: Language[];
  currentLanguage: Language | undefined;
  language: string;
  setLanguage: (lng: string) => void;
}

function SelectComponent({
  label,
  language,
  languages,
  setLanguage,
  currentLanguage,
}: Props) {
  return (
    <div>
      <h3 className="mb-2 max-sm:mb-1 font-medium">{label}</h3>
      <Select
        onValueChange={(value) => setLanguage(value)}
        defaultValue={language}
      >
        <SelectTrigger className="sm:w-[200px]">
          {currentLanguage?.flag} {currentLanguage?.name}
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span> {lang.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectComponent;
