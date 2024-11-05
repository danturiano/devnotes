import Brand from "@/components/Brand";
import { Button } from "@/components/Button";
import Link from "next/link";
import React from "react";

const nav = ["Home", "Pricing", "How it works"];

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className="py-4 fixed top-0 w-full z-10 shadow-sm bg-background/95">
      <nav className="flex items-center justify-between container font-regular">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <Brand />
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-muted-foreground font-semibold">
              {nav.map((item) => {
                return (
                  <li>
                    <Link href={"/"}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center md:hidden">{children}</div>
        <div className="hidden md:block md:space-x-3">
          <Button variant={"outline"}>Create Account</Button>
          <Button>Sign in</Button>
        </div>
      </nav>
    </header>
  );
}