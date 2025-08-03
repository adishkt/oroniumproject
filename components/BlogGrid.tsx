'use client'

import { useBlogPosts } from '@/hooks/useBlogPosts'
import BlogCard from './BlogCard'
import { useSearchParams } from 'next/navigation'

export default function BlogGrid() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || ''
  
  const { data: postsData, isLoading, error } = useBlogPosts({
    q: query,
    category: category,
    limit: 12
  })

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-2xl mb-4"></div>
                <div className="space-y-3">
                  <div className="bg-gray-200 h-4 rounded w-1/4"></div>
                  <div className="bg-gray-200 h-6 rounded w-3/4"></div>
                  <div className="bg-gray-200 h-4 rounded w-full"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Failed to load articles. Please try again later.</p>
          </div>
        </div>
      </section>
    )
  }

  if (!postsData || postsData.data.length === 0) {
    return (
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">
              {query || category 
                ? `No articles found for "${query || category}". Try a different search term.`
                : 'No articles available at the moment.'
              }
            </p>
          </div>
        </div>
      </section>
    )
  }

  const posts = postsData.data

  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {query || category ? 'Search Results' : 'Latest Articles'}
          </h2>
          {query && (
            <p className="text-gray-600">
              Found {postsData.total} article{postsData.total !== 1 ? 's' : ''} for "{query}"
            </p>
          )}
          {category && (
            <p className="text-gray-600">
              Showing articles in "{category}" category
            </p>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        {postsData.total > posts.length && (
          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 