import Header from "@/components/shared/Header";
import { ChildProps } from "@/types";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
