"use client";

import Brand from "@/components/Brand";
import { Button } from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="py-4 fixed top-0 w-full z-10 shadow-sm bg-background/95">
      <nav className="flex items-center justify-between container font-regular">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <Brand />
          </Link>
        </div>
        <div>
          <Link href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}>
            <Button variant={"outline"}>
              {pathname === "/sign-up" ? "Sign in" : "Sign up"}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
