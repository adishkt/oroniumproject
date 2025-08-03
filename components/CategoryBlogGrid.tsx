'use client'

import { useBlogPosts } from '@/hooks/useBlogPosts'
import BlogCard from './BlogCard'

interface CategoryBlogGridProps {
  category: string
}

export default function CategoryBlogGrid({ category }: CategoryBlogGridProps) {
  const { data: postsData, isLoading, error } = useBlogPosts({
    category: category,
    limit: 12
  })

  if (isLoading) {
    return (
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
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Failed to load articles. Please try again later.</p>
      </div>
    )
  }

  if (!postsData || postsData.data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">
          No articles found in the "{category}" category.
        </p>
      </div>
    )
  }

  const posts = postsData.data

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
} 