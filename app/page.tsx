import type { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BlogGrid from '@/components/BlogGrid'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Beyond UI | Discover Amazing Articles',
  description: 'Explore the latest insights in technology, design, and programming. Discover amazing articles with our modern blog platform.',
  keywords: ['blog', 'technology', 'design', 'programming', 'articles', 'web development'],
  openGraph: {
    title: 'Blog - Beyond UI | Discover Amazing Articles',
    description: 'Explore the latest insights in technology, design, and programming.',
    type: 'website',
    url: 'https://beyondui.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Beyond UI | Discover Amazing Articles',
    description: 'Explore the latest insights in technology, design, and programming.',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BlogGrid />
      <Footer />
    </main>
  )
} 