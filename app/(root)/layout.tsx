import { LanguageProvider } from "@/components/providers/LanguageProvider";
import Header from "@/components/shared/Header";
import { ChildProps } from "@/types";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Header />
      <main className="mb-10">
        <LanguageProvider>{children}</LanguageProvider>
      </main>
    </>
  );
}

export default Layout;
