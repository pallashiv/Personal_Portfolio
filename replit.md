# Portfolio Website

## Overview

This is a modern, responsive portfolio website for an aspiring software engineer and product manager. The application is built using a full-stack architecture with React frontend and Express backend, featuring a dark tech-themed design with smooth animations and a professional layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom tech-themed color variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Architecture Pattern**: RESTful API design
- **Development Setup**: TSX for development server with hot reload

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage

## Key Components

### Frontend Components
- **Hero Section**: Landing page with animated gradient background and call-to-action buttons
- **Projects Section**: Showcases three main projects (BevoPlace, ALSpeak, ShivShares) with technology tags
- **Skills Section**: Categorized technical skills with icons and hover effects
- **Experience Section**: Work history with timeline-style layout
- **Education Section**: University information and relevant coursework
- **Resume Section**: Download section with professional styling
- **Sidebar Navigation**: Mobile-responsive navigation with smooth scrolling

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route Registration**: Centralized route management system
- **Development Middleware**: Request logging and error handling
- **Vite Integration**: Development server with hot module replacement

### UI System
- **Design System**: Consistent color palette with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Theme**: Tech-focused dark theme with blue/purple accent colors
- **Component Library**: 30+ reusable UI components from shadcn/ui

## Data Flow

### Development Mode
1. Client requests are handled by Vite development server
2. API requests are proxied to Express backend
3. Backend uses in-memory storage for development data
4. Hot reload updates both client and server code

### Production Mode
1. Frontend is built and served as static files
2. Express serves both API routes and static assets
3. Database connections use environment-based configuration
4. Session management through PostgreSQL store

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **framer-motion**: Animation library for smooth UI transitions
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing for single-page application
- **date-fns**: Date manipulation and formatting utilities

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development debugging tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production builds

### UI Libraries
- **@radix-ui/***: Headless UI primitives for accessibility
- **lucide-react**: Modern icon library
- **class-variance-authority**: Utility for component variant management
- **tailwind-merge**: Intelligent Tailwind class merging

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to optimized static files
2. **Backend Build**: ESBuild bundles Express server with external dependencies
3. **Database Setup**: Drizzle migrations prepare PostgreSQL schema
4. **Asset Processing**: Tailwind CSS is purged and optimized

### Environment Configuration
- **Development**: Uses local development server with hot reload
- **Production**: Serves bundled application with environment variables for database
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Management**: Secure session storage with PostgreSQL backend

### Scalability Considerations
- **Database**: Serverless PostgreSQL scales automatically with usage
- **Frontend**: Static files can be served via CDN
- **Backend**: Stateless Express server enables horizontal scaling
- **Caching**: TanStack Query provides client-side caching for improved performance