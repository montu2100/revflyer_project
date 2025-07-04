import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// More graceful handling of missing environment variables
let supabase: any = null;
let isSupabaseConfigured = false;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    isSupabaseConfigured = true;
    console.log('Supabase client initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    isSupabaseConfigured = false;
  }
} else {
  console.warn('Supabase environment variables not configured. Blog will use fallback content.');
  isSupabaseConfigured = false;
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
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Supabase error fetching published posts:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      console.log('Fetched published posts from Supabase:', data);
      return data || [];
    } catch (err) {
      console.error('Error in getPublishedPosts:', err);
      throw err;
    }
  },

  // Get a single post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }

    try {
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
        console.error('Supabase error fetching post by slug:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.error('Error in getPostBySlug:', err);
      throw err;
    }
  },

  // Get recent posts (for homepage)
  async getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Supabase error fetching recent posts:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      console.log('Fetched recent posts from Supabase:', data);
      return data || [];
    } catch (err) {
      console.error('Error in getRecentPosts:', err);
      throw err;
    }
  },

  // Get posts by tag
  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .contains('tags', [tag])
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Supabase error fetching posts by tag:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in getPostsByTag:', err);
      throw err;
    }
  },

  // Search posts
  async searchPosts(query: string): Promise<BlogPost[]> {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .or(`title.ilike.%${query}%, excerpt.ilike.%${query}%, content.ilike.%${query}%`)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Supabase error searching posts:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.error('Error in searchPosts:', err);
      throw err;
    }
  }
};

export { supabase, isSupabaseConfigured };