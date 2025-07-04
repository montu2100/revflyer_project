import { useState, useEffect } from 'react';
import { BlogPost, blogQueries } from '../lib/supabase';

export const useBlogPosts = (limit?: number) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = limit 
          ? await blogQueries.getRecentPosts(limit)
          : await blogQueries.getPublishedPosts();
        
        setPosts(data);
        console.log('Successfully fetched posts:', data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load blog posts';
        setError(errorMessage);
        setPosts([]); // Ensure posts is empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
};

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);
        
        const data = await blogQueries.getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load blog post';
        setError(errorMessage);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
};