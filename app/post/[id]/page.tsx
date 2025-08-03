import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogApi } from '@/lib/api'
import { BlogPost } from '@/types/blog'

interface PostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  try {
    const post = await blogApi.getPost(params.id)
    
    return {
      title: `${post.title} - Beyond UI`,
      description: post.excerpt,
      keywords: [...post.tags, post.category, 'blog', 'article'],
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author.name],
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
    }
  } catch (error) {
    return {
      title: 'Post Not Found - Beyond UI',
      description: 'The requested blog post could not be found.',
    }
  }
}

export default async function PostPage({ params }: PostPageProps) {
  let post: BlogPost

  try {
    post = await blogApi.getPost(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Back Button */}
      <div className="container-custom py-6">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
        >
          <ArrowLeft size={16} />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container-custom max-w-4xl mx-auto px-4">
        {/* Category */}
        <div className="mb-6">
          <span className="text-primary-600 text-sm font-medium bg-primary-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                <p className="font-medium text-gray-900">{post.author.name}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            {/* Read Time */}
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{post.readTime} min read</span>
            </div>

            {/* Date */}
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
            </time>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed text-base space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  )
} 