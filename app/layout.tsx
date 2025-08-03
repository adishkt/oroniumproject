import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog - Beyond UI',
  description: 'A modern blog application built with Next.js, featuring server-side rendering and beautiful UI design.',
  keywords: ['blog', 'next.js', 'react', 'typescript', 'tailwind css'],
  authors: [{ name: 'Beyond UI' }],
  openGraph: {
    title: 'Blog - Beyond UI',
    description: 'A modern blog application built with Next.js',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 