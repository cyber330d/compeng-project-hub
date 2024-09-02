"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NextResponse } from "next/server";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Can't be empty.",
  }),
  password: z.string().min(8, {
    message: "Please check again.",
  }),
});

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Submit handler
  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Send the login request
  //   const response = await fetch("/api/v1/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   if (response.ok) {
  //     // Parse the response
  //     const result = await response.json();

  //     // Redirect to the profile page with query parameters
  //     const queryParams = new URLSearchParams({
  //       user: JSON.stringify(result.user),
  //     }).toString();

  //     router.push(`/profile?${queryParams}`);
  //   }
  // }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    return new NextResponse("Succesfull");
  }
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full  max-w-96 text-primary">
      {/* form heading */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-medium text-2xl  not-italic leading-9">Login</h2>
        <div className="not-italic ">Welcome back to CompEng Project Hub!</div>
      </div>
      {/* Login form fields */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-6 w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="relative flex flex-col items-start gap-1 w-full  self-stretch">
                <FormLabel className="font-light w-full not-italic ">
                  Email or Reg No
                </FormLabel>
                <div
                  className={cn(
                    "!mt-0 flex w-full items-center gap-3 self-stretch rounded-lg border-[1px] border-solid bg-white p-4 hover:border-primary focus:border-primary focus-visible:border-primary",
                    form.formState.errors.username
                      ? "border-red-600"
                      : "border-borders"
                  )}
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="Registration number or Email"
                      className="border-transparent"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative flex flex-col items-start gap-1 w-full self-stretch">
                <FormLabel className="font-light w-full not-italic">
                  Password
                </FormLabel>
                <div
                  className={cn(
                    "!mt-0 flex w-full items-center gap-3 self-stretch rounded-lg border-[1px] border-solid bg-white p-4 hover:border-primary focus:border-primary focus-visible:border-primary",
                    form.formState.errors.password
                      ? "border-red-600"
                      : "border-borders"
                  )}
                >
                  <Lock className="w-5 h-5 text-primary" />
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Enter your password"
                      className="border-transparent"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex flex-col justify-center items-center gap-2 bg-primary px-[1.688rem] py-[.688rem] h-12 rounded-lg w-full font-semibold text-white not-italic leading-60 self-stretch"
          >
            Login
          </Button>
          <div className="flex justify-between items-center w-full font-normal  not-italic self-stretch">
            <span className="">Don&apos;t have an account?</span>
            <Link
              href="/register"
              className="hover:opacity-90 hover:shadow-btn-active md:pl-1   text-primary transition"
            >
              Create account
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
