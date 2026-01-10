# Photo-Rama

A modern photo management application built with Next.js and Cloudinary, featuring an intuitive dashboard for organizing and managing your photo library.

## Overview

Photo-Rama is a full-featured photo gallery application that allows users to upload, organize, and manage their photos with a beautiful, responsive interface. The application leverages Cloudinary for image storage and optimization, providing a seamless experience for handling large photo collections.

## Features

### 🖼️ Gallery Management

- **Photo Upload**: Upload images directly to Cloudinary with instant feedback
- **Grid View**: Browse all photos in a responsive masonry-style grid layout
- **Auto-refresh**: Automatic page refresh after successful uploads
- **Image Optimization**: Cloudinary integration for optimized image delivery

### ❤️ Favorites System

- **Mark Favorites**: One-click favoriting with heart icon toggle
- **Favorites Page**: Dedicated view for all favorited photos
- **Real-time Updates**: Optimistic UI updates with server-side persistence
- **Tag-based Filtering**: Uses Cloudinary tags to manage favorite status

### 📁 Organization

- **Gallery**: View all uploaded photos sorted by upload date (newest first)
- **Favorites**: Quick access to your favorite images
- **Albums**: Placeholder for future album organization features
- **Archive**: Placeholder for archived/deleted photos

### 🎨 Modern UI/UX

- **Sidebar Navigation**: Collapsible sidebar with icon-based navigation
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **shadcn/ui Components**: Beautiful, accessible UI components
- **Phosphor Icons**: Clean, modern iconography throughout the app
- **Dark Mode Support**: Built-in dark mode compatibility

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **Image Management**: Cloudinary + next-cloudinary
- **Icons**: Phosphor Icons
- **Notifications**: React Toastify

## Project Structure

``
photo-rama/
├── src/app/
│   ├── dashboard/          # Main dashboard layout and pages
│   │   ├── gallery/        # Gallery view with all photos
│   │   ├── favorites/      # Favorited photos view
│   │   ├── albums/         # Albums view (placeholder)
│   │   └── archive/        # Archive view (placeholder)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page with upload demo
├── components/
│   ├── app-sidebar.tsx     # Navigation sidebar
│   ├── cloudinaryImage.tsx # Image component with favorite toggle
│   ├── image-grid.tsx      # Responsive grid layout
│   ├── upload-button.tsx   # Upload button component
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
``

## Getting Started

### Prerequisites

- Node.js 20+ installed
- Cloudinary account with API credentials
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Configure Cloudinary credentials
   - Set up upload preset named "photo-rama"

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Features Implementation

### Image Upload

- Uses Cloudinary Upload Widget via `next-cloudinary`
- Configured with custom upload preset
- Automatic router refresh after successful upload

### Favorites System

- Server actions for updating image tags
- Optimistic UI updates for instant feedback
- Cloudinary tag-based filtering (`tags:favorite`)

### Dashboard Layout

- Sidebar navigation with active state tracking
- Header with user avatar
- Responsive design with overflow handling

## Future Enhancements

- Albums functionality for organizing photos into collections
- Archive system for soft-deleting photos
- Search and filter capabilities
- Bulk operations (select multiple, batch delete, etc.)
- Image editing capabilities
- Sharing and collaboration features

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project
