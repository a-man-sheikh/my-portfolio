# Ubuntu-Themed Portfolio Application

## Overview

This is a full-stack web application that presents a personal portfolio with an Ubuntu Linux terminal aesthetic. The application features a React frontend styled with Ubuntu design elements and a Node.js/Express backend with PostgreSQL database integration. The project is structured as a monorepo with shared schemas and modern development tooling.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom Ubuntu theme colors and typography
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store
- **API Architecture**: RESTful APIs with `/api` prefix
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Schema Management**: Type-safe schema definitions in shared directory
- **Migrations**: Automated migrations with Drizzle Kit
- **Current Schema**: Users table with username/password fields

## Key Components

### Frontend Components
- **Terminal Window**: Ubuntu-styled terminal interface component
- **Progress Bar**: Animated skill progress indicators
- **Typing Animation**: Typewriter effect for dynamic text
- **Portfolio Sections**: Hero, about, skills, projects, experience, contact
- **UI Library**: Complete shadcn/ui component set (buttons, forms, dialogs, etc.)

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route organization system
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Comprehensive API request logging

### Shared Components
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Runtime validation with Zod schemas

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests with proper error handling
3. **Data Access**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with proper HTTP status codes
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI primitives
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Hookform resolvers
- **Icons**: Lucide React icons, React Icons for brand icons
- **Date Handling**: date-fns for date utilities

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict configuration
- **Database Tools**: Drizzle Kit for migrations and schema management
- **PostCSS**: Tailwind CSS processing with autoprefixer

## Deployment Strategy

### Development Environment
- **Local Development**: npm run dev starts both frontend and backend
- **Hot Reload**: Vite provides instant feedback for frontend changes
- **Database**: PostgreSQL connection via environment variables
- **Port Configuration**: Backend runs on port 5000, frontend proxied through Vite

### Production Build
- **Frontend Build**: Vite builds optimized React application to dist/public
- **Backend Build**: esbuild bundles Express server to dist/index.js
- **Static Serving**: Express serves built frontend files in production
- **Database**: Production PostgreSQL connection via DATABASE_URL

### Replit Deployment
- **Autoscale Target**: Configured for automatic scaling
- **Build Process**: npm run build creates production artifacts
- **Runtime**: npm run start executes production server
- **Port Mapping**: Internal port 5000 mapped to external port 80

## Changelog

Changelog:
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.