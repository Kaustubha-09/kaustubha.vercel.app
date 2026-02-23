# Kaustubha Eluri - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Research Software Engineer and AI/ML Systems Engineer. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Core Features
- **Dark/Light Mode** - System preference detection with manual toggle
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Smooth Animations** - Framer Motion powered transitions and scroll animations
- **Scroll Progress Bar** - Visual indicator of page scroll position
- **Modern UI Components** - Built with Radix UI primitives for accessibility

### Pages & Sections
- **Home** - Hero section with credibility strip, tech badges, and CTAs
- **About** - Personal journey timeline and problem statements
- **Experience** - Professional experience with expandable details (What I Built & Impact)
- **Projects** - Filterable project showcase (AI/ML, Mobile, Systems, Research)
- **Education** - Academic background and coursework
- **Skills** - Visual skill grid with proficiency indicators
- **Leadership** - Leadership roles and community involvement
- **Contact** - Contact information and availability status

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Key Libraries
- **Framer Motion** - Animation library
- **next-themes** - Theme management (dark/light mode)
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives (Card, Badge, Avatar, etc.)

### Development Tools
- **Vite** - Fast build tool
- **Tailwind CSS v4** - Latest Tailwind with Vite plugin
- **TypeScript** - Type checking

## 📁 Project Structure

```
├── public/
│   └── assets/
│       ├── experience/     # Company logos
│       ├── education/      # University logos
│       ├── photos/         # Team photos and images
│       └── personal/       # Profile images
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── figma/     # Figma-specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Leadership.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── pages/         # Page components
│   │   ├── routes.tsx     # Route configuration
│   │   └── App.tsx        # Root component
│   └── styles/
│       └── tailwind.css   # Global styles
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kaustubha-09/Kaustubha-09.github.io.git
   cd Kaustubha-09.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)

## 🎨 Design System

### Color Palette
- **Light Mode**: White backgrounds with slate text
- **Dark Mode**: Slate-900 backgrounds with white text
- **Accents**: Blue, green, purple for CTAs and highlights

### Typography
- **Headings**: Bold, large sizes (text-4xl to text-6xl)
- **Body**: Regular weight, readable line heights
- **Font**: System font stack (sans-serif)

### Spacing
- Consistent 8px grid system
- Section padding: `py-24 px-6`
- Max width: `max-w-6xl` for content sections

### Components
- **Cards**: Border, shadow, hover effects
- **Badges**: Colored pills for tags and status
- **Buttons**: Rounded corners, hover states
- **Animations**: Fade-in on scroll, smooth transitions

## 🔧 Key Components

### Navigation
- Sticky navbar with blur background
- Centered navigation tabs
- Hover underline animation
- Theme toggle on the right

### Hero Section
- Name and role headline
- Credibility strip with checkmarks
- Tech badges
- CTA buttons (View Projects, Download Resume)
- Availability badge

### Experience Page
- Featured experiences with gradient headers
- Expandable "What I Built" and "Impact" sections
- Company logos and locations
- Chronological sorting (newest first)

### Projects Page
- Filter tabs (All, AI/ML, Mobile, Systems, Research)
- Featured projects section
- Project cards with images
- GitHub and demo links

## 🌐 Deployment

This portfolio is configured for GitHub Pages deployment.

### GitHub Pages Setup
1. Push code to `main` branch
2. Go to repository Settings → Pages
3. Select source: `Deploy from a branch`
4. Select branch: `main` and folder: `/ (root)`
5. The site will be available at `https://kaustubha-09.github.io`

### Custom Domain (Optional)
1. Add `CNAME` file in `public/` directory with your domain
2. Configure DNS records as per GitHub Pages documentation

## 📝 Content Updates

### Updating Experience
Edit `src/app/components/Experience.tsx` - modify the `experiences` array.

### Updating Projects
Edit `src/app/components/Projects.tsx` - modify the `projects` array.

### Updating Skills
Edit `src/app/components/Skills.tsx` - modify the `skillCategories` array.

### Updating Personal Info
- **Hero**: `src/app/components/Hero.tsx`
- **About**: `src/app/components/About.tsx`
- **Contact**: `src/app/components/Contact.tsx`

## 🎯 Performance

- **Build Size**: Optimized with Vite
- **Images**: Lazy loading with fallback support
- **Animations**: GPU-accelerated with Framer Motion
- **Code Splitting**: Automatic with React Router

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- WCAG AA+ contrast ratios
- Focus states on interactive elements

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Kaustubha Eluri**
- Portfolio: [kaustubha-09.github.io](https://kaustubha-09.github.io)
- Email: kaustubha.eluri@northeastern.edu
- LinkedIn: [Connect with me](https://www.linkedin.com/in/kaustubha-eluri/)

## 🙏 Acknowledgments

- Design inspiration from Linear, Vercel, and Apple developer portfolios
- Built with modern web technologies and best practices
- Icons from [Lucide](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)

---

**Status**: 🟢 Active Development  
**Last Updated**: January 2026
