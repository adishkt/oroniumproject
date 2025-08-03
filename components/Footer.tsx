export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">Beyond UI</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Discover amazing articles about technology, design, and programming. 
              Stay updated with the latest trends and insights in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/category/technology" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Technology
                </a>
              </li>
              <li>
                <a href="/category/design" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Design
                </a>
              </li>
              <li>
                <a href="/category/programming" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Programming
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:hello@beyondui.com" className="hover:text-white transition-colors duration-200">
                  hello@beyondui.com
                </a>
              </li>
              <li className="text-gray-400">
                <a href="https://twitter.com/beyondui" className="hover:text-white transition-colors duration-200">
                  @beyondui
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Beyond UI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 