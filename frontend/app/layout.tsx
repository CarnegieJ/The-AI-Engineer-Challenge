import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Engineer Challenge - Chat Interface by Carnegie Johnson',
  description: 'A beautiful chat interface for the AI Engineer Challenge, powered by OpenAI and FastAPI',
  keywords: ['AI', 'Chat', 'OpenAI', 'FastAPI', 'Next.js'],
  authors: [{ name: 'AI Engineer Challenge - Carnegie Johnson' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-50 via-white to-primary-50">
          {children}
        </div>
      </body>
    </html>
  )
}
