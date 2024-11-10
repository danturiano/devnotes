"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import React from "react";

export default function ToogleSidebar() {
  const { open, isMobile } = useSidebar();

  return (
    (!open && (
      <div className="p-5">
        <SidebarTrigger />
      </div>
    )) ||
    (isMobile && open && <SidebarTrigger />)
  );
}
