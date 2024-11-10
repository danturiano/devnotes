import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ToogleSidebar from "./_components/ToogleSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar className="border border-r" />
      <ToogleSidebar />
      <main className="container py-2 mt-10">{children}</main>
    </SidebarProvider>
  );
}
