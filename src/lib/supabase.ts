import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// More graceful handling of missing environment variables
let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
} else {
  console.warn('Supabase environment variables not configured. Using fallback content.');
}

// Database types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  author_name: string;
  author_email?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at: string;
  updated_at: string;
  tags: string[];
  read_time_minutes?: number;
}

// Blog post queries
export const blogQueries = {
  // Get all published posts
  async getPublishedPosts(): Promise<BlogPost[]> {
    if (!supabase) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching published posts:', error);
      throw error;
    }

    console.log('Fetched published posts:', data);
    return data || [];
  },

  // Get a single post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!supabase) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .not('published_at', 'is', null)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned
        return null;
      }
      console.error('Error fetching post by slug:', error);
      throw error;
    }

    return data;
  },

  // Get recent posts (for homepage)
  async getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
    if (!supabase) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching recent posts:', error);
      throw error;
    }

    console.log('Fetched recent posts:', data);
    return data || [];
  },

  // Get posts by tag
  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    if (!supabase) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .not('published_at', 'is', null)
      .contains('tags', [tag])
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts by tag:', error);
      throw error;
    }

    return data || [];
  },

  // Search posts
  async searchPosts(query: string): Promise<BlogPost[]> {
    if (!supabase) {
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('status', 'published')
      .not('published_at', 'is', null)
      .or(`title.ilike.%${query}%, excerpt.ilike.%${query}%, content.ilike.%${query}%`)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error searching posts:', error);
      throw error;
    }

    return data || [];
  }
};

export { supabase };