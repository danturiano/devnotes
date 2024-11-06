"use client";

import React from "react";
import GithubButton from "./GithubButton";
import GoogleButton from "./GoogleButton";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function Authentication({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container md:flex items-center justify-center flex-col">
      <div className="flex flex-col rounded-lg items-start gap-4 md:gap-6 bg-white p-10 shadow-sm border border-muted">
        <div className="text-start space-y-2">
          <h1 className="text-2xl font-bold md:text-3xl">
            {pathname === "/sign-up" ? "Welcome" : "Welcome back"}
          </h1>
          <div className="flex gap-1 items-center text-sm md:text-lg md:gap-2">
            <p className="text-sm md:text-md text-muted-foreground">
              {pathname === "/sign-up"
                ? "Enter your email below to create your account"
                : "Log in to your account to continue."}
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <GithubButton />
          <GoogleButton />
        </div>
        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center w-full">
          <Separator orientation="horizontal" />
          <p className="text-center text-xs text-muted-foreground font-medium">
            OR CONTINUE WITH
          </p>
          <Separator orientation="horizontal" />
        </div>
        {children}
        <p className="text-xs text-muted-foreground text-center mt-4">
          By signing in, you agree to our{" "}
          <span className="text-primary font-medium">Terms</span> and{" "}
          <span className="text-primary font-medium">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
