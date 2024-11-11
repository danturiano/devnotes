"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function ToogleSidebar() {
  const { open, isMobile } = useSidebar();

  return (
    (open && isMobile && (
      <div className="absolute z-50 top-5 left-5">
        <SidebarTrigger />
      </div>
    )) ||
    (!open && !isMobile && (
      <div className="p-5">
        <SidebarTrigger />
      </div>
    ))
  );
}
