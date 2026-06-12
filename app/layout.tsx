// app/layout.tsx
import { Raleway, Geist } from 'next/font/google'
import { cn } from '@/lib/utils'
import { AppShell } from '@/components/layout/app-shell'
import type { Metadata } from 'next'
import './globals.css'

const geistHeading = Geist({ subsets: ['latin'], variable: '--font-heading' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: 'Guitar Aura | Intelligent Guitar Practice Assistant',
    template: '%s | Guitar Aura',
  },
  description:
    'Optimize your guitar practice routines, manage session timers, catalog chords, and perfect your technical execution.',
  keywords: [
    'guitar',
    'practice routine',
    'chords',
    'metronome',
    'Zustand',
    'guitar practice app',
    'music theory',
  ],
  openGraph: {
    title: 'Guitar Aura',
    description: 'The intelligent assistant for guitar players.',
    url: 'https://guitar-aura.vercel.app',
    siteName: 'Guitar Aura',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guitar Aura',
    description: 'Optimize your guitar practice routines seamlessly.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn('dark', raleway.variable, geistHeading.variable)}
    >
      <body className="bg-background text-foreground min-h-screen antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
