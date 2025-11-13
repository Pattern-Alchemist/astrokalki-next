import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AstroKalki - Interactive Oracle',
  description: 'AI-powered astrology tools, live radio, and karmic intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="starfield">{children}</body>
    </html>
  )
}
