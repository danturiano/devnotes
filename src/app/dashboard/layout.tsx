import { AppSidebar } from "@/components/app-sidebar";
import Loading from "@/components/Loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";
import ToogleSidebar from "./_components/ToogleSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar className="border border-r" />
      <ToogleSidebar />
      <Suspense fallback={<Loading />}>
        <main className="container py-2 mt-10">{children}</main>
      </Suspense>
    </SidebarProvider>
  );
}
