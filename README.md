# Blog Application - Beyond UI

A modern, responsive blog application built with Next.js 14, TypeScript, Tailwind CSS, and React Query. This application closely matches the Dribbble design and implements all the requested features.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Optimized for SEO and performance
- **Dynamic Routing** - Individual blog post pages with dynamic routes
- **Search Functionality** - Real-time search with URL-based state management
- **Category Filtering** - Filter posts by category
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **React Query Integration** - Efficient data fetching and caching
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimization** - Meta tags, Open Graph, and structured data
- **Modern UI/UX** - Beautiful design matching the Dribbble reference

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Images**: Next.js Image Optimization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
blog-app/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── providers.tsx      # React Query provider
│   ├── post/[id]/         # Dynamic blog post routes
│   └── category/[category]/ # Category pages
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── BlogCard.tsx       # Blog post card
│   ├── SearchBar.tsx      # Search functionality
│   ├── HeroSection.tsx    # Hero section
│   ├── BlogGrid.tsx       # Blog posts grid
│   └── CategoryBlogGrid.tsx # Category filtered grid
├── hooks/                 # Custom React hooks
│   └── useBlogPosts.ts    # React Query hooks
├── lib/                   # Utility functions
│   └── api.ts            # API utilities
├── types/                 # TypeScript type definitions
│   └── blog.ts           # Blog-related types
└── public/               # Static assets
```

## 🎨 Design Features

### Typography & Spacing
- **Font Family**: Inter (Google Fonts)
- **Font Sizes**: Carefully scaled from xs to 6xl
- **Line Heights**: Optimized for readability
- **Spacing**: Consistent 4px grid system
- **Colors**: Primary blue palette with gray scale

### Components
- **Cards**: Rounded corners (16px), subtle shadows, hover effects
- **Buttons**: Primary blue with hover states
- **Search Bar**: Rounded design with focus states
- **Navigation**: Clean, minimal design

### Responsive Design
- **Mobile**: Single column layout
- **Tablet**: Two-column grid
- **Desktop**: Three-column grid with featured post

## 🔧 Configuration

### API Configuration
The application uses a mock API with fallback data. To use a real API:

1. Update the `API_BASE_URL` in `lib/api.ts`
2. Ensure your API returns data in the expected format
3. The app will gracefully fall back to mock data if the API is unavailable

### Tailwind Configuration
Custom configuration in `tailwind.config.js` includes:
- Custom color palette
- Typography scale
- Spacing utilities
- Component classes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔍 SEO Features

- Dynamic meta tags
- Open Graph support
- Twitter Card support
- Structured data
- Sitemap generation ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Dribbble
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- React Query for efficient data management 