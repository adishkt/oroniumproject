'use client'

import { Search, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface SearchBarProps {
  placeholder?: string
  className?: string
}

export default function SearchBar({ placeholder = "Search articles...", className = "" }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentQuery = searchParams.get('q') || ''
    setQuery(currentQuery)
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const clearSearch = () => {
    setQuery('')
    router.push('/')
  }

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className={`relative flex items-center bg-white border rounded-xl transition-all duration-200 ${
        isFocused 
          ? 'border-primary-500 shadow-lg shadow-primary-100' 
          : 'border-gray-200 hover:border-gray-300'
      }`}>
        <div className="absolute left-4 text-gray-400">
          <Search size={20} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none text-base"
          aria-label="Search articles"
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </form>
  )
} 