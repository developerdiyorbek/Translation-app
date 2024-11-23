import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import LoginComponent from "../_components/LoginComponent";

export const metadata: Metadata = {
  title: "Login",
  description: "Login with email and password",
};

async function Page() {
  return (
    <section className="container mx-auto max-md:my-10 my-14 max-md:px-5">
      <Card className="max-w-[500px] mx-auto w-full">
        <CardContent>
          <h1 className="mb-3 text-center text-3xl font-extrabold text-dark-grey-900 text-main my-5 max-md:text-2xl">
            Login
          </h1>
          <div className="flex items-center justify-between mb-5 max-md:text-[14px]">
            <p className="opacity-70">If you don&apos;t have account</p>
            <Link
              href={"/auth/register"}
              className="block w-fit ml-auto text-main opacity-80 hover:underline hover:opacity-100 transition-all duration-200"
            >
              Create account
            </Link>
          </div>
          <LoginComponent />
        </CardContent>
      </Card>
    </section>
  );
}

export default Page;
