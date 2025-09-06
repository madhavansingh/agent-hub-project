import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center px-6 shadow-soft">
            <SidebarTrigger className="mr-4" />
            <div className="flex-1" />
            
            {/* User menu placeholder */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}