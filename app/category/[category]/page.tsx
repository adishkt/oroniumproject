import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import CategoryBlogGrid from '@/components/CategoryBlogGrid'
import Footer from '@/components/Footer'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category)
  
  return {
    title: `${category} Articles - Beyond UI`,
    description: `Explore the latest ${category.toLowerCase()} articles and insights on Beyond UI.`,
    keywords: [category, 'articles', 'blog', 'beyond ui'],
    openGraph: {
      title: `${category} Articles - Beyond UI`,
      description: `Explore the latest ${category.toLowerCase()} articles and insights.`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category)
  
  // Validate category
  const validCategories = ['technology', 'design', 'programming', 'performance']
  if (!validCategories.includes(category.toLowerCase())) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Category Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {category} Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest insights and trends in {category.toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid with Category Filter */}
      <div className="py-16">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest {category} Articles
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest {category.toLowerCase()} content
            </p>
          </div>
          
          <CategoryBlogGrid category={category} />
        </div>
      </div>

      <Footer />
    </main>
  )
} 