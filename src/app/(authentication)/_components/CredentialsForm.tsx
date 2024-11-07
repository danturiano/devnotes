"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, usePathname } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import {
  registerWithCredentials,
  signInWithCredentials,
} from "../_lib/actions";
import { CredentialsSchema } from "../_lib/types";
import { Button } from "@/components/Button";
import Link from "next/link";
import SpinnerMini from "@/components/SpinnerMini";

export default function CredentialsForm() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof CredentialsSchema>>({
    resolver: zodResolver(CredentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof CredentialsSchema>) {
    startTransition(() => {
      if (pathname === "/sign-in") verifyCredentials(data);
      registerCredentials(data);
    });
  }

  const registerCredentials = async (
    data: z.infer<typeof CredentialsSchema>
  ) => {
    const response = await registerWithCredentials(data);
    console.log(response);
    if (response.error) {
      toast.error("Invalid credentials");
    } else {
      toast.success("Successfully signed up!");
      redirect("/dashboard");
    }
  };

  const verifyCredentials = async (data: z.infer<typeof CredentialsSchema>) => {
    const response = await signInWithCredentials(data);
    console.log(response);
    if (response.error) {
      toast.error("Invalid credentials");
    } else {
      toast.success("Successfully signed in!");
      redirect("/dashboard");
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  type="email"
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
              <FormLabel>
                <div className="flex justify-between items-center">
                  <p>Password</p>
                  {pathname === "/sign-in" && (
                    <Link href={"/"} className="text-muted-foreground">
                      Forgot password?
                    </Link>
                  )}
                </div>
              </FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.errors.root && (
          <div className="text-sm font-medium text-red-500">
            {form.formState.errors.root.message}
          </div>
        )}
        <Button className="p-1 w-full mt-3" disabled={isPending}>
          {!isPending ? (
            pathname === "/sign-in" ? (
              "Continue"
            ) : (
              "Create Account"
            )
          ) : (
            <SpinnerMini />
          )}
        </Button>
      </form>
    </Form>
  );
}
