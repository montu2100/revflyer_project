import React from 'react';
import { BlogPost } from '../lib/supabase';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date unavailable';
    }
  };

  const handleCardClick = () => {
    // For now, we'll just scroll to top. In a real app, you'd navigate to the post detail page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article 
      className={`bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300 cursor-pointer group ${className}`}
      onClick={handleCardClick}
    >
      {/* Featured Image */}
      <div className="aspect-[4/3] overflow-hidden">
        {post.featured_image_url ? (
          <img 
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.classList.remove('hidden');
              }
            }}
          />
        ) : null}
        <div className={`w-full h-full bg-gradient-to-br from-accent-200 to-accent-300 flex items-center justify-center ${post.featured_image_url ? 'hidden' : ''}`}>
          <span className="text-accent-700 text-sm font-medium">Featured Image</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-grow flex flex-col">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-charcoal-400 mb-4">
          {post.published_at && (
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formatDate(post.published_at)}</span>
            </div>
          )}
          {post.read_time_minutes && (
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{post.read_time_minutes} min read</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-medium text-charcoal-900 mb-4 group-hover:text-primary-900 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Tag size={12} className="text-charcoal-400" />
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-charcoal-500">
            By {post.author_name}
          </span>
          <span className="text-primary-900 text-sm md:text-base hover:underline transition-colors group-hover:text-primary-800">
            Read more →
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;