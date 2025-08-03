import axios from 'axios'
import { BlogPost, BlogPostResponse, SearchParams } from '@/types/blog'

// Mock API URL - you can replace this with your actual MockAPI endpoint
const API_BASE_URL = 'https://mockapi.io/projects/your-project-id'

// Fallback mock data in case the API is not available
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies that will shape the future of web development in the coming year.',
    content: 'Web development is constantly evolving, and 2024 promises to bring exciting new technologies and methodologies...',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    category: 'Technology',
    tags: ['Web Development', 'Future Tech', 'Programming'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Learn how to effectively use React Hooks to build modern, functional components with clean and maintainable code.',
    content: 'React Hooks have revolutionized how we write React components. They allow us to use state and other React features...',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-12T14:30:00Z',
    readTime: 12,
    category: 'Programming',
    tags: ['React', 'JavaScript', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Design Systems: Building Scalable UI Components',
    excerpt: 'Discover the benefits of design systems and how to create reusable components that scale with your application.',
    content: 'Design systems are the foundation of modern UI development. They provide consistency, efficiency, and scalability...',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-10T09:15:00Z',
    readTime: 10,
    category: 'Design',
    tags: ['Design Systems', 'UI/UX', 'Components'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Performance Optimization Techniques for Modern Web Apps',
    excerpt: 'Learn essential techniques to optimize your web application performance and provide better user experience.',
    content: 'Performance is crucial for user experience and SEO. Modern web applications need to be fast and responsive...',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-08T16:45:00Z',
    readTime: 15,
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'Web Apps'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Explore TypeScript best practices that will help you build maintainable and scalable applications.',
    content: 'TypeScript has become the standard for large-scale JavaScript applications. It provides type safety and better tooling...',
    author: {
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-05T11:20:00Z',
    readTime: 14,
    category: 'Programming',
    tags: ['TypeScript', 'Best Practices', 'Development'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'The Rise of Server-Side Rendering in Modern Web Development',
    excerpt: 'Understand the benefits of SSR and how it\'s changing the landscape of web development.',
    content: 'Server-side rendering has made a comeback in modern web development. It offers better SEO, performance, and user experience...',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    publishedAt: '2024-01-03T13:10:00Z',
    readTime: 11,
    category: 'Technology',
    tags: ['SSR', 'Next.js', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
  }
]

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

export const blogApi = {
  async getPosts(params: SearchParams = {}): Promise<BlogPostResponse> {
    try {
      const response = await api.get('/posts', { params })
      return response.data
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      // Return mock data if API is not available
      let filteredPosts = [...mockPosts]
      
      if (params.q) {
        const searchTerm = params.q.toLowerCase()
        filteredPosts = filteredPosts.filter(post =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        )
      }
      
      if (params.category) {
        filteredPosts = filteredPosts.filter(post =>
          post.category.toLowerCase() === params.category?.toLowerCase()
        )
      }
      
      const page = params.page || 1
      const limit = params.limit || 6
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedPosts = filteredPosts.slice(startIndex, endIndex)
      
      return {
        data: paginatedPosts,
        total: filteredPosts.length,
        page,
        limit
      }
    }
  },

  async getPost(id: string): Promise<BlogPost> {
    try {
      const response = await api.get(`/posts/${id}`)
      return response.data
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      const post = mockPosts.find(p => p.id === id)
      if (!post) {
        throw new Error('Post not found')
      }
      return post
    }
  },

  async getFeaturedPosts(): Promise<BlogPost[]> {
    try {
      const response = await api.get('/posts', { params: { featured: true } })
      return response.data.data
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      return mockPosts.filter(post => post.featured)
    }
  }
} 