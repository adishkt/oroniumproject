'use client'

import { useQuery } from '@tanstack/react-query'
import { blogApi } from '@/lib/api'
import { SearchParams } from '@/types/blog'

export const useBlogPosts = (params: SearchParams = {}) => {
  return useQuery({
    queryKey: ['blog-posts', params],
    queryFn: () => blogApi.getPosts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useBlogPost = (id: string) => {
  return useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => blogApi.getPost(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const useFeaturedPosts = () => {
  return useQuery({
    queryKey: ['featured-posts'],
    queryFn: () => blogApi.getFeaturedPosts(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
} 