# RevFlyer - Revenue Operations Consultancy

A modern, responsive website for RevFlyer's revenue operations consulting services, built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all device sizes
- **Content Management**: Supabase-powered blog system
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant design

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Mantine UI components
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for blog functionality)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd revflyer_project
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Configure Supabase (optional)
   - Create a new Supabase project
   - Run the migration in `supabase/migrations/create_blog_schema.sql`
   - Add your Supabase URL and anon key to `.env`

5. Start the development server
```bash
npm run dev
```

## Supabase Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Run Database Migration
1. Go to the SQL Editor in your Supabase dashboard
2. Copy and paste the contents of `supabase/migrations/create_blog_schema.sql`
3. Run the migration

### 3. Configure Environment Variables
Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Content Management

### Blog Posts
The blog system supports:
- Rich text content with Markdown
- Featured images
- Tags and categories
- Author information
- Publishing workflow
- SEO optimization

### Adding Content
1. Use the Supabase dashboard to add new posts
2. Or build a custom admin interface using the provided API functions

## Project Structure

```
src/
├── components/          # React components
│   ├── BlogCard.tsx    # Blog post card component
│   ├── BlogSection.tsx # Blog listing section
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useBlogPosts.ts # Blog data fetching
│   └── ...
├── lib/                # Utilities and configurations
│   └── supabase.ts     # Supabase client and queries
└── ...
```

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Environment Variables for Production
```
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_anon_key
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.