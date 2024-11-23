import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import RegisterComponent from "../_components/RegisterComponent";

export const metadata: Metadata = {
  title: "Register",
  description: "Register",
};

async function Page() {
  return (
    <section className="container mx-auto max-md:px-5">
      <Card className="max-w-[500px] mx-auto w-full">
        <CardContent>
          <h1 className="mb-3 text-center text-3xl font-extrabold text-dark-grey-900 text-main my-5 max-md:text-2xl">
            Register
          </h1>
          <div className="flex items-center justify-between mb-5 max-md:text-[14px]">
            <p className="opacity-70">If you have account</p>
            <Link
              href={"/auth"}
              className="block w-fit ml-auto text-main opacity-80 hover:underline hover:opacity-100 transition-all duration-200"
            >
              Login
            </Link>
          </div>
          <RegisterComponent />
        </CardContent>
      </Card>
    </section>
  );
}

export default Page;
