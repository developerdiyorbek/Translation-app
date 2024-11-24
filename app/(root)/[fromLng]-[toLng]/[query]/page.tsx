import { Metadata } from "next";
import TranslationPageComponent from "../_components/TranslationPageComponent";

export const metadata: Metadata = {
  title: "Translation page",
};

function Page() {
  return (
    <section className="container mx-auto max-md:px-3 max-w-6xl">
      <h1 className="text-2xl mb-3">Translation Result</h1>
      <TranslationPageComponent />
    </section>
  );
}

export default Page;
