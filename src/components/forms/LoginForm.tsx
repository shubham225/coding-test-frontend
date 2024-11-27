"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputFormField from "../custom-ui/InputField";
import { Loader2, Mail } from "lucide-react";
import PassowrdInput from "../custom-ui/input/PasswordInput";
import { Input } from "../ui/input";
import SimpleInput from "../custom-ui/input/SimpleInput";

export const loginFormSchema = z.object({
  email: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <SimpleInput
          id="email"
          label="Email"
          message={form.formState.errors.email?.message}
          placeholder="Enter email address"
          {...form.register("email")}
        />
        <PassowrdInput
          id="password"
          label="Password"
          message={form.formState.errors.password?.message}
          placeholder="Enter Password"
          {...form.register("password")}
        />
        <div className="flex flex-col gap-3 pt-2">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Loading...{" "}
              </>
            ) : (
              <>Sign In</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
