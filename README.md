# Destiny Doors - Shilpa A Jain Numerology Website

A modern, elegant numerology consultation website built with Next.js 14, featuring smooth animations, responsive design, and WhatsApp integration for seamless booking.

## 🌟 Overview

Destiny Doors serves as a professional online presence for Shilpa A Jain, a certified numerology expert and life path guide. The platform provides information about numerology services, facilitates consultation bookings via WhatsApp, and shares insights through blog posts and client testimonials.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React 18** - Latest React features with Server Components

### Key Libraries
- **Lucide React** - Beautiful icon library
- **Gray Matter** - MDX frontmatter parsing for blog posts
- **React Markdown** - Markdown rendering
- **clsx & tailwind-merge** - Conditional class management

### Development Tools
- **TypeScript** - Type checking
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## ✨ Features

### User-Facing Features
- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- 🌈 Custom color palette with teal/emerald theme
- ⚡ Optimized performance with Next.js SSR
- 💬 WhatsApp integration for direct booking
- 📝 Blog with MDX support
- ⭐ Client testimonials showcase
- 🎯 Multiple service offerings
- 🧭 Intuitive navigation with active state indicators

### Technical Features
- Server-Side Rendering (SSR) for better SEO
- Optimized animated backgrounds
- Lazy loading of images
- Type-safe component architecture
- Reusable UI components
- API routes for dynamic content
- SEO-optimized metadata

## 📁 Project Structure

```
destiny-doors/
├── app/                          # Next.js 14 App Directory
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── blog/recent/         # Recent blog posts API
│   │   ├── services/home/       # Services for home page API
│   │   └── testimonials/featured/ # Featured testimonials API
│   ├── blog/                     # Blog pages
│   │   ├── [slug]/              # Dynamic blog post pages
│   │   └── page.tsx             # Blog listing page
│   ├── book/                     # Booking page
│   ├── services/                 # Services page
│   ├── testimonials/             # Testimonials page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx           # Button component
│   │   ├── Card.tsx             # Card component
│   │   ├── Input.tsx            # Input component
│   │   └── Textarea.tsx         # Textarea component
│   ├── AnimatedBackground.tsx   # Animated background effects
│   ├── OptimizedAnimatedBackgrounds.tsx # Performance-optimized backgrounds
│   ├── MysticalEffects.tsx      # Mystical visual effects
│   ├── ScrollProgress.tsx       # Scroll progress indicator
│   └── icons.tsx                # Icon exports
├── content/                      # Content files
│   └── blog/                    # Blog posts in MDX format
│       ├── life-path-number-guide.mdx
│       ├── numerology-career-success.mdx
│       └── relationship-compatibility-numerology.mdx
├── docs/                         # Documentation
│   ├── ACCESSIBILITY.md
│   ├── ASSETS.md
│   ├── COMPONENTS.md
│   ├── DESIGN_SYSTEM.md
│   ├── DEVELOPER_HANDOFF.md
│   ├── PAGES.md
│   ├── STYLE_GUIDE.md
│   └── README.md
├── lib/                          # Utility functions and data
│   ├── animations.ts            # Framer Motion animation configs
│   ├── blog.ts                  # Blog data and utilities
│   ├── services.ts              # Services data
│   ├── testimonials.ts          # Testimonials data
│   └── utils.ts                 # Helper functions
├── public/                       # Static assets
│   └── hero-portrait.jpg        # Hero section portrait image
├── numera_images/               # Additional images
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Project dependencies
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/destiny-doors.git
   cd destiny-doors
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with profile and statistics
- Featured services showcase
- Client testimonials
- Recent blog posts
- Call-to-action sections

### About Page (`/about`)
- Professional biography
- Expertise and qualifications
- Personal approach to numerology
- Journey and experience

### Services Page (`/services`)
- Detailed service offerings
- Personal numerology sessions
- Career guidance
- Relationship compatibility
- Additional specialized services
- How it works section
- FAQs

### Book Page (`/book`)
- WhatsApp booking integration
- Service selection
- Step-by-step booking process
- "Not sure" consultation option

### Blog Page (`/blog`)
- Blog post listings
- MDX-powered articles
- Dynamic routing for individual posts
- Categories and tags

### Testimonials Page (`/testimonials`)
- Client reviews and experiences
- Star ratings
- Service categories
- Call-to-action

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#7B6CF6) - Spiritual accent
- **Secondary/Accent**: Gold (#E6C77A) - Warm accent
- **Background**: 
  - Base: Light green (#E8F5E8)
  - Secondary: Mint (#C8E6C9)
  - Elevated: White (#FFFFFF)
- **Text**:
  - Primary: Charcoal (#2F2F2F)
  - Secondary: Gray (#5F5F5F)
  - Muted: Light gray (#8A8A8A)
- **Teal/Emerald**: Used for hero section and CTAs
  - Teal: #0D9488, #14B8A6
  - Emerald: #059669, #047857

### Typography
- **Heading Font**: Serif (Georgia, etc.)
- **Body Font**: Sans-serif (System fonts)
- **Font Sizes**: Responsive scaling from mobile to desktop

### Components
- Consistent spacing and padding
- Border radius: sm (4px), base (8px), lg (16px), xl (24px)
- Shadow system: sm, md, lg, xl
- Smooth transitions and animations

## 🔧 Configuration

### Environment Variables
Currently, the project doesn't require environment variables. WhatsApp number is hardcoded in the booking page.

### Customization Points
- **WhatsApp Number**: `app/book/page.tsx` - Update `whatsappURL`
- **Email**: `components/layout/Footer.tsx` - Update contact email
- **Services**: `lib/services.ts` - Modify service offerings
- **Testimonials**: `lib/testimonials.ts` - Add/edit testimonials
- **Blog Posts**: `content/blog/` - Add new MDX files
- **Colors**: `tailwind.config.js` and `app/globals.css`

## 🎭 Key Components

### Layout Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Contact info, quick links, and services

### UI Components
- **Button**: Multiple variants (primary, secondary, text, outline)
- **Card**: Content cards with optional hover effects
- **Input/Textarea**: Form elements with consistent styling

### Animation Components
- **OptimizedAnimatedBackgrounds**: Performance-optimized background effects
- **ScrollProgress**: Page scroll indicator
- **Framer Motion**: Smooth page transitions and element animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Mobile-first approach with progressive enhancement for larger screens.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build command: `npm run build`
Output directory: `.next`

## 🔍 SEO

- Metadata configured for all pages
- Semantic HTML structure
- Optimized images with alt text
- Sitemap generation ready
- OpenGraph tags support

## 🤝 Contributing

This is a private project for Shilpa A Jain. For modifications or questions, please contact the development team.

## 📝 License

© 2025 Shilpa A Jain. All rights reserved.

## 📞 Support

For website support or modifications:
- Email: shilpajain.ooty@gmail.com
- WhatsApp: +91 9443003664

## 🙏 Acknowledgments

- Design inspiration from modern spiritual websites
- Icons from Lucide React
- Animations powered by Framer Motion
- Built with Next.js and Tailwind CSS

---

**Version**: 1.0.0
**Last Updated**: December 2025
