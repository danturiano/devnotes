"use client";

import Brand from "@/components/Brand";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import NavigationOverlay from "./_components/NavigationOverlay";
import Navigation from "./_components/Navigation";

export default function LandingLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navigation>
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu /> : <X />}
        </button>
      </Navigation>
      <main>{!isOpen ? children : <NavigationOverlay />}</main>
    </div>
  );
}
