export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

export interface BlogPostResponse {
  data: BlogPost[]
  total: number
  page: number
  limit: number
}

export interface SearchParams {
  q?: string
  category?: string
  page?: number
  limit?: number
} 