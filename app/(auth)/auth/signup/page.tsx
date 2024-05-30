/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React from "react";
import { signUpFormSchema } from "../../../../lib/form-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpPage = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });
  const onSubmit = (val: z.infer<typeof signUpFormSchema>) => {
    console.log(val);
  };
  return (
    <div className="relative h-screen w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border-border border p-5">
          <div className="mb-2 text-center text-2xl font-semibold">Sign Up</div>
          <div className="text-sm text-gray-500">
            Enter your email to access dashboard
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="Enter your Name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="Enter your email..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="Enter your Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Sign Up</Button>
              <div className="text-sm">Already have an account</div>
              <Link href="/auth/signin" className="text-primary">
                Sign In
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
