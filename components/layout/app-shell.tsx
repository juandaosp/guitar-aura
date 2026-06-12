'use client'

import * as React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { SideNavbar } from '@/components/nav/side-navbar'
import { SettingsBar } from '@/components/nav/settings-bar'

interface AppShellProps {
  children: React.ReactNode
}

const appName = 'GUITAR AURA'

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider>
      <SideNavbar appName={appName} />
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <SettingsBar />
        <main className="bg-background flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
