'use client'

import { useFeaturedPosts } from '@/hooks/useBlogPosts'
import BlogCard from './BlogCard'
import SearchBar from './SearchBar'

export default function HeroSection() {
  const { data: featuredPosts, isLoading, error } = useFeaturedPosts()

  if (isLoading) {
    return (
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the latest insights in technology, design, and programming
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar />
          </div>

          <div className="animate-pulse">
            <div className="bg-white rounded-2xl h-96"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !featuredPosts || featuredPosts.length === 0) {
    return (
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the latest insights in technology, design, and programming
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar />
          </div>

          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-600">No featured posts available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  const featuredPost = featuredPosts[0]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container-custom">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore the latest insights in technology, design, and programming
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Featured Post */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          <BlogCard post={featuredPost} featured={true} />
        </div>
      </div>
    </section>
  )
} 