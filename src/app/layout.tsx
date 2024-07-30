import type { Metadata } from 'next'
import './globals.css'
import { fontDisp, fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/header'

export const metadata: Metadata = {
  title: `Kundan Bhasin - Portfolio`,
  description: `Hi, I'm Kundan, a full-stack developer. Welcome to my portfolio.`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, fontMono.variable, fontDisp.variable, 'dark')}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
