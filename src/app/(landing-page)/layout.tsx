"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import Navigation from "./_components/Navigation";
import NavigationOverlay from "./_components/NavigationOverlay";

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
