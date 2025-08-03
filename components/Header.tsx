'use client'

import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Beyond UI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/category/technology" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Technology
            </Link>
            <Link 
              href="/category/design" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Design
            </Link>
            <Link 
              href="/category/programming" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Programming
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Search size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/category/technology" 
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                href="/category/design" 
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Design
              </Link>
              <Link 
                href="/category/programming" 
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Programming
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 