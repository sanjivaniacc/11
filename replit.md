# arcu Business Website

## Overview

arcu is a full-stack web application built as a corporate business website showcasing company services, team members, and various business offerings. The application features a modern design with red, black, and white gradient backgrounds, responsive layouts, and comprehensive business pages including team profiles, event management, corporate booking, and dining services.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript running on Vite
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Comprehensive component library based on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Development**: TypeScript with hot module replacement via Vite
- **Build System**: ESBuild for production bundling
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Provider**: Neon Database serverless PostgreSQL
- **Schema**: Simple user management system with username/password authentication
- **Migration Strategy**: Drizzle Kit for schema migrations

## Key Components

### Frontend Pages
- **Home**: Hero section with company introduction and call-to-action buttons
- **Team**: Dedicated team showcase with member profiles
- **Company**: Corporate information and mission/vision statements
- **Services**: Multiple service pages (Events, Corporate Booking, Dining, Clubs)
- **Contact**: Contact form with company information
- **About/Career/Policy**: Additional business information pages

### UI Component System
- **Design System**: shadcn/ui components with Tailwind CSS
- **Theme**: Custom gradient color scheme (red/black) with glassmorphism effects
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: CSS animations for floating elements and page transitions

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic CRUD operations for user entities
- **API Routes**: Express.js routing with /api prefix convention
- **Error Handling**: Centralized error handling middleware

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for data fetching
2. API requests routed through centralized query client
3. Components receive data via React hooks and context
4. Form submissions handled through React Hook Form with Zod validation

### Server-Side Data Flow
1. Express server handles incoming HTTP requests
2. Route handlers interact with storage interface
3. Business logic processes data through service layer
4. Responses formatted and returned to client

### Database Operations
1. Drizzle ORM provides type-safe database operations
2. Schema definitions shared between client and server
3. Migrations managed through Drizzle Kit
4. Connection pooling handled by Neon serverless

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript for frontend development
- Express.js for backend API server
- Drizzle ORM for database operations
- TanStack Query for client-side data management

### UI and Styling Dependencies
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- shadcn/ui component library
- Lucide React for icons
- Font Awesome for additional icons

### Development and Build Tools
- Vite for development server and building
- ESBuild for production bundling
- TSX for TypeScript execution
- Various PostCSS plugins for CSS processing

### Database and Authentication
- Neon Database for serverless PostgreSQL
- Connect-pg-simple for session storage
- Drizzle Zod for schema validation

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: PostgreSQL instance configured via environment variables
- **Port Configuration**: Application runs on port 5000 with external port 80

### Production Build Process
1. Frontend assets built using Vite and output to dist/public
2. Backend compiled using ESBuild to dist/index.js
3. Static assets served from production Express server
4. Database migrations applied using Drizzle Kit

### Replit Configuration
- **Modules**: Node.js 20, web development, and PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Build Command**: npm run build
- **Start Command**: npm run start
- **Development**: npm run dev with live reload

### Environment Requirements
- DATABASE_URL environment variable for PostgreSQL connection
- Node.js 20+ runtime environment
- PostgreSQL 16 database instance

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 25, 2025. Initial setup