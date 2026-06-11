"use client";
import { Raleway, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SideNavbar } from "@/components/nav/side-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SettingsBar } from "@/components/nav/settings-bar";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });

const appName = "GUITAR AURA";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={cn("dark", raleway.variable, geistHeading.variable)}
    >
      <body className="bg-background text-foreground antialiased min-h-screen">
        {/* ⚡ Hidrata la music store de Zustand silenciosamente en el cliente */}
        <SidebarProvider>
          <SideNavbar appName={appName} />
          <div className="flex flex-col w-full h-screen overflow-hidden">
            <SettingsBar />
            <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-background">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
