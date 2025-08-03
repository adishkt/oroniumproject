'use client'

import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Clock, User } from 'lucide-react'
import { BlogPost } from '@/types/blog'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <Link href={`/post/${post.id}`} className="block">
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-48'}`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          />
          {post.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-3">
            <span className="text-primary-600 text-sm font-medium bg-primary-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
            featured ? 'text-2xl leading-tight' : 'text-xl leading-tight'
          }`}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Author */}
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {post.author.name}
                </span>
              </div>

              {/* Read Time */}
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock size={14} />
                <span className="text-sm">{post.readTime} min read</span>
              </div>
            </div>

            {/* Date */}
            <time className="text-sm text-gray-500">
              {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
} 