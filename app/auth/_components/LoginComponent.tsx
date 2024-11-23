"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

type IForm = z.infer<typeof loginSchema>;

function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: IForm) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-[2px]">
          Email
        </label>
        <Input id="email" {...register("email")} placeholder="Email" />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium mb-[2px]"
        >
          Password
        </label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
        <button
          type="button"
          className="absolute pl-2 font-medium text-main right-1 top-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <Button type="submit" className="w-full text-[16px] font-semibold">
        Login
      </Button>
    </form>
  );
}

export default LoginComponent;