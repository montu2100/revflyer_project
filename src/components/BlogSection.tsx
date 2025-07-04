import React from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import BlogCard from './BlogCard';
import AnimatedElement from './AnimatedElement';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const BlogSection: React.FC = () => {
  const { posts, loading, error } = useBlogPosts(3);
  const { containerRef, isVisible } = useStaggeredAnimation(3, 100);

  // Fallback content for when Supabase is not available or has issues
  const fallbackPosts = [
    {
      id: 'fallback-1',
      title: 'Optimizing Your Sales Funnel for Maximum Revenue',
      slug: 'optimizing-sales-funnel-maximum-revenue',
      excerpt: 'Learn how to identify bottlenecks in your sales process and implement data-driven strategies to accelerate revenue growth.',
      content: '',
      author_name: 'RevFlyer Team',
      author_email: null,
      status: 'published' as const,
      published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tags: ['sales', 'optimization', 'revenue'],
      read_time_minutes: 8,
      featured_image_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    },
    {
      id: 'fallback-2',
      title: 'The Complete Guide to CRM Implementation',
      slug: 'complete-guide-crm-implementation',
      excerpt: 'Step-by-step strategies for successful CRM deployment, data migration, and team adoption to maximize your investment.',
      content: '',
      author_name: 'RevFlyer Team',
      author_email: null,
      status: 'published' as const,
      published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tags: ['crm', 'implementation', 'technology'],
      read_time_minutes: 12,
      featured_image_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    },
    {
      id: 'fallback-3',
      title: 'Building a Data-Driven Revenue Operations Team',
      slug: 'building-data-driven-revenue-operations-team',
      excerpt: 'Essential frameworks and tools for creating a high-performing RevOps team that drives predictable revenue growth.',
      content: '',
      author_name: 'RevFlyer Team',
      author_email: null,
      status: 'published' as const,
      published_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tags: ['revops', 'team-building', 'strategy'],
      read_time_minutes: 15,
      featured_image_url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
    }
  ];

  // Use fallback posts if there's an error or no posts from Supabase
  const displayPosts = (error || posts.length === 0) ? fallbackPosts : posts;

  return (
    <section id="insights" className="py-20 md:py-24 lg:py-28 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <AnimatedElement as="p" className="text-sm text-charcoal-400 mb-6 tracking-wide font-medium">
            <span className="uppercase font-medium text-base">Latest Insights</span>
          </AnimatedElement>
          
          <AnimatedElement delay={100} as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-8 lg:mb-10">
            Revenue Operations Insights
          </AnimatedElement>
          
          <AnimatedElement delay={200} as="p" className="text-charcoal-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay ahead with the latest trends, strategies, and best practices in revenue operations.
          </AnimatedElement>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-900"></div>
            <p className="mt-4 text-charcoal-600">Loading insights...</p>
          </div>
        )}

        {/* Error State Notice (only in development) */}
        {error && process.env.NODE_ENV === 'development' && (
          <div className="text-center py-4 mb-8">
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-sm">
              <p className="text-yellow-800 font-medium mb-2">Development Notice:</p>
              <p className="text-yellow-700">
                {import.meta.env.VITE_SUPABASE_URL ? 
                  'Unable to load from Supabase. Showing sample content.' : 
                  'Supabase not configured. Showing sample content.'
                }
              </p>
              <p className="text-yellow-600 mt-2">Error: {error}</p>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && displayPosts.length > 0 && (
          <div ref={containerRef} className="grid md:grid-cols-3 gap-8 md:gap-10">
            {displayPosts.map((post, index) => (
              <div
                key={post.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 600ms cubic-bezier(0.33, 1, 0.68, 1) ${index * 100}ms, transform 600ms cubic-bezier(0.33, 1, 0.68, 1) ${index * 100}ms`
                }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}

        {/* No posts message (should rarely show due to fallback) */}
        {!loading && displayPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-charcoal-600">No articles available at the moment.</p>
          </div>
        )}

        {/* CTA to view all posts */}
        {!loading && displayPosts.length > 0 && (
          <AnimatedElement delay={400} className="text-center mt-16">
            <button className="text-primary-900 hover:text-primary-800 font-medium transition-colors">
              View All Insights →
            </button>
          </AnimatedElement>
        )}
      </div>
    </section>
  );
};

export default BlogSection;