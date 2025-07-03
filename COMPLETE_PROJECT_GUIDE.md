# Complete arcu Website Guide - Copy & Paste Ready

## 1. Package.json Dependencies

```json
{
  "name": "arcu-website",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build --outDir dist/public",
    "build:server": "esbuild server/index.ts --bundle --platform=node --outfile=dist/index.js --external:express --external:@neondatabase/serverless",
    "start": "NODE_ENV=production node dist/index.js",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@neondatabase/serverless": "^0.10.4",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.3",
    "@radix-ui/react-aspect-ratio": "^1.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-collapsible": "^1.1.2",
    "@radix-ui/react-context-menu": "^2.2.3",
    "@radix-ui/react-dialog": "^1.1.3",
    "@radix-ui/react-dropdown-menu": "^2.1.3",
    "@radix-ui/react-hover-card": "^1.1.3",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-menubar": "^1.1.3",
    "@radix-ui/react-navigation-menu": "^1.2.2",
    "@radix-ui/react-popover": "^1.1.3",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-scroll-area": "^1.2.1",
    "@radix-ui/react-select": "^2.1.3",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.3",
    "@radix-ui/react-toggle": "^1.1.1",
    "@radix-ui/react-toggle-group": "^1.1.1",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@tanstack/react-query": "^5.61.3",
    "@types/connect-pg-simple": "^7.0.3",
    "@types/express": "^5.0.0",
    "@types/express-session": "^1.18.0",
    "@types/node": "^22.10.2",
    "@types/passport": "^1.0.16",
    "@types/passport-local": "^1.0.38",
    "@types/react": "^18.3.17",
    "@types/react-dom": "^18.3.5",
    "@types/ws": "^8.5.13",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "connect-pg-simple": "^10.0.0",
    "date-fns": "^4.1.0",
    "drizzle-kit": "^0.30.0",
    "drizzle-orm": "^0.38.2",
    "drizzle-zod": "^0.5.1",
    "embla-carousel-react": "^8.4.0",
    "esbuild": "^0.24.2",
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "framer-motion": "^11.15.0",
    "input-otp": "^1.4.1",
    "lucide-react": "^0.468.0",
    "memorystore": "^1.6.7",
    "next-themes": "^0.4.4",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "postcss": "^8.5.1",
    "react": "^18.3.1",
    "react-day-picker": "8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.13.3",
    "tailwind-merge": "^2.5.5",
    "tailwindcss": "^3.4.17",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.19.2",
    "tw-animate-css": "^0.1.0",
    "typescript": "^5.6.3",
    "vaul": "^1.1.2",
    "vite": "^6.0.3",
    "wouter": "^3.3.5",
    "ws": "^8.18.0",
    "zod": "^3.23.8",
    "zod-validation-error": "^3.4.0"
  }
}
```

## 2. HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>arcu - Leading Business Innovation</title>
    <meta name="description" content="Leading the future of business innovation with exceptional team expertise and cutting-edge solutions. Meet our world-class team of professionals." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 3. CSS Styles (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --muted: hsl(60, 4.8%, 95.9%);
  --muted-foreground: hsl(25, 5.3%, 44.7%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(20, 14.3%, 4.1%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(20, 14.3%, 4.1%);
  --border: hsl(20, 5.9%, 90%);
  --input: hsl(20, 5.9%, 90%);
  --primary: hsl(207, 90%, 54%);
  --primary-foreground: hsl(211, 100%, 99%);
  --secondary: hsl(60, 4.8%, 95.9%);
  --secondary-foreground: hsl(24, 9.8%, 10%);
  --accent: hsl(60, 4.8%, 95.9%);
  --accent-foreground: hsl(24, 9.8%, 10%);
  --destructive: hsl(0, 84.2%, 60.2%);
  --destructive-foreground: hsl(60, 9.1%, 97.8%);
  --ring: hsl(20, 14.3%, 4.1%);
  --radius: 0.5rem;
  
  /* Custom gradient colors */
  --red-primary: hsl(0, 74%, 42%);
  --red-secondary: hsl(0, 84%, 60%);
  --red-dark: hsl(0, 63%, 31%);
  --black-primary: hsl(0, 0%, 0%);
  --black-secondary: hsl(220, 13%, 9%);
  --black-tertiary: hsl(217, 19%, 15%);
}

.dark {
  --background: hsl(240, 10%, 3.9%);
  --foreground: hsl(0, 0%, 98%);
  --muted: hsl(240, 3.7%, 15.9%);
  --muted-foreground: hsl(240, 5%, 64.9%);
  --popover: hsl(240, 10%, 3.9%);
  --popover-foreground: hsl(0, 0%, 98%);
  --card: hsl(240, 10%, 3.9%);
  --card-foreground: hsl(0, 0%, 98%);
  --border: hsl(240, 3.7%, 15.9%);
  --input: hsl(240, 3.7%, 15.9%);
  --primary: hsl(207, 90%, 54%);
  --primary-foreground: hsl(211, 100%, 99%);
  --secondary: hsl(240, 3.7%, 15.9%);
  --secondary-foreground: hsl(0, 0%, 98%);
  --accent: hsl(240, 3.7%, 15.9%);
  --accent-foreground: hsl(0, 0%, 98%);
  --destructive: hsl(0, 62.8%, 30.6%);
  --destructive-foreground: hsl(0, 0%, 98%);
  --ring: hsl(240, 4.9%, 83.9%);
  --radius: 0.5rem;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
}

@layer utilities {
  .gradient-shift {
    background: linear-gradient(-45deg, var(--red-primary), var(--black-secondary), var(--red-secondary), var(--black-primary));
    background-size: 400% 400%;
    animation: gradient-shift 8s ease infinite;
  }
  
  .gradient-red-black {
    background: linear-gradient(135deg, var(--red-primary) 0%, var(--black-secondary) 50%, var(--red-dark) 100%);
  }
  
  .gradient-black-red {
    background: linear-gradient(135deg, var(--black-primary) 0%, var(--red-primary) 50%, var(--black-secondary) 100%);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-delayed-4 {
  animation: float 6s ease-in-out infinite;
  animation-delay: 4s;
}
```

## 4. Navigation Component

```tsx
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/company", label: "Company" },
    { path: "/team", label: "Our Team" },
    { path: "/events", label: "Event Details" },
    { path: "/corporate", label: "Corporate Booking" },
    { path: "/career", label: "Career" },
    { path: "/policy", label: "Our Policy" },
    { path: "/clubs", label: "Clubs" },
    { path: "/dining", label: "Dinings" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center">
              <i className="fas fa-fire text-white text-sm"></i>
            </div>
            <span className="text-white font-bold text-xl">arcu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-red-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-red-500/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-red-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full text-center hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```

## 5. Footer Component

```tsx
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <i className="fas fa-fire text-white text-sm"></i>
              </div>
              <span className="text-white font-bold text-xl">arcu</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the future of business innovation with exceptional team expertise and cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-red-500 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-red-500 transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-400 hover:text-red-500 transition-colors">
                  Corporate Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/career" className="text-gray-400 hover:text-red-500 transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-gray-400 hover:text-red-500 transition-colors">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-gray-400 hover:text-red-500 transition-colors">
                  Dinings
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-400 hover:text-red-500 transition-colors">
                  Our Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-red-500"></i>
                <span>123 Business Ave, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-red-500"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-red-500"></i>
                <span>contact@arcu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 arcu. All rights reserved. Designed with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

## 6. Home Page Component

```tsx
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
              <i className="fas fa-rocket text-red-500"></i>
              <span className="text-white text-sm font-medium">Welcome to arcu</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Leading Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We drive innovation and deliver exceptional results with our world-class team of professionals and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/team"
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-users mr-2"></i>
                Meet Our Team
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/30 rounded-full animate-float-delayed-4"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose arcu?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">We deliver excellence through innovation, expertise, and commitment to our clients' success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-star text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence drives everything we do, ensuring the highest quality results for our clients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We leverage cutting-edge technology and innovative approaches to solve complex business challenges.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team of seasoned professionals brings decades of experience and specialized knowledge to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

## 7. Team Members Component

```tsx
export default function TeamMembers() {
  const teamMembers = [
    {
      name: "John Anderson",
      position: "Chief Executive Officer",
      bio: "Visionary leader with 20+ years of experience in driving organizational growth and innovation.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Sarah Mitchell",
      position: "Chief Technology Officer",
      bio: "Technology enthusiast leading digital transformation initiatives and innovative solutions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c0763d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Michael Thompson",
      position: "Marketing Director",
      bio: "Creative strategist specializing in brand development and customer engagement initiatives.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager",
      bio: "Operational excellence expert ensuring smooth processes and efficient project delivery.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "David Chen",
      position: "Finance Director",
      bio: "Financial strategist with expertise in investment planning and risk management.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Lisa Wang",
      position: "HR Director",
      bio: "People-focused leader dedicated to building strong teams and fostering company culture.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
  ];

  return (
    <section id="team-members" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-black/80 to-red-600/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the visionaries who guide our company towards excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
            >
              <img 
                src={member.avatar} 
                alt={`${member.name} Portrait`} 
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-red-500/50 group-hover:border-red-500 transition-all duration-300 object-cover" 
              />
              <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
              <p className="text-red-500 text-center mb-4 font-semibold">{member.position}</p>
              <p className="text-gray-300 text-sm text-center mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 8. App.tsx Main Component

```tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Company from "@/pages/company";
import Team from "@/pages/team";
import Events from "@/pages/events";
import Corporate from "@/pages/corporate";
import Career from "@/pages/career";
import Policy from "@/pages/policy";
import Clubs from "@/pages/clubs";
import Dining from "@/pages/dining";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen gradient-shift">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/company" component={Company} />
        <Route path="/team" component={Team} />
        <Route path="/events" component={Events} />
        <Route path="/corporate" component={Corporate} />
        <Route path="/career" component={Career} />
        <Route path="/policy" component={Policy} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/dining" component={Dining} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

## 9. Vite Configuration

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  root: "client",
  build: {
    outDir: "../dist/public",
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
```

## 10. TailwindCSS Configuration

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./client/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

## 11. Key Design Patterns

### Card Component Pattern:
```tsx
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-6">
    <i className="fas fa-icon text-white"></i>
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">Title</h3>
  <p className="text-gray-300 leading-relaxed">Content</p>
</div>
```

### Hero Section Pattern:
```tsx
<section className="pt-24 pb-16 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-600/10 to-black/80"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto animate-slide-up">
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-red-500/30">
        <i className="fas fa-icon text-red-500"></i>
        <span className="text-white text-sm font-medium">Badge Text</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Title <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Highlight</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">Description</p>
    </div>
  </div>
</section>
```

This complete guide provides all the code and patterns needed to recreate the arcu website design on any platform.