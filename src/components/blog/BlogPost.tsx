import React, { useState, useEffect } from 'react';
import {
  Paper,
  Container,
  Title,
  Text,
  Group,
  Avatar,
  Badge,
  ActionIcon,
  Divider,
  Box,
  Stack,
  Button,
  Progress,
  Affix,
  Transition,
  Anchor,
  Image,
  Skeleton
} from '@mantine/core';
import {
  IconHeart,
  IconBookmark,
  IconShare,
  IconArrowUp,
  IconCalendar,
  IconClock,
  IconUser,
  IconEye
} from '@tabler/icons-react';
import { useBlogPost } from '../../hooks/useBlogPosts';
import { BlogPageProps, TableOfContentsItem } from '../../types/blog';
import BlogContent from './BlogContent';
import TableOfContents from './TableOfContents';
import SocialShare from './SocialShare';
import RelatedArticles from './RelatedArticles';
import CommentSection from './CommentSection';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const BlogPost: React.FC<BlogPageProps> = ({ slug }) => {
  const { post, loading, error } = useBlogPost(slug);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [tocItems, setTocItems] = useState<TableOfContentsItem[]>([]);
  const { scrollProgress, scrollToTop } = useScrollProgress();

  useEffect(() => {
    if (post) {
      // Update document title and meta tags
      document.title = `${post.title} | RevFlyer Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt || post.title);
      }
    }
  }, [post]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // TODO: Implement like functionality with backend
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: Implement bookmark functionality with backend
  };

  if (loading) {
    return (
      <Container size="lg" py="xl">
        <Paper shadow="sm" radius="md" p="xl">
          <Stack gap="lg">
            <Skeleton height={40} />
            <Group>
              <Skeleton height={24} circle />
              <Skeleton height={20} width={120} />
              <Skeleton height={20} width={80} />
            </Group>
            <Skeleton height={200} />
            <Skeleton height={20} />
            <Skeleton height={20} />
            <Skeleton height={20} width="70%" />
          </Stack>
        </Paper>
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container size="lg" py="xl">
        <Paper shadow="sm" radius="md" p="xl">
          <Stack align="center" gap="lg">
            <Title order={2} c="dimmed">Article Not Found</Title>
            <Text c="dimmed">The article you're looking for doesn't exist or has been removed.</Text>
            <Button component="a" href="/" variant="filled">
              Return to Homepage
            </Button>
          </Stack>
        </Paper>
      </Container>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <Progress
        value={scrollProgress}
        size="xs"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: 'transparent'
        }}
        color="teal"
      />

      <Container size="lg" py="xl">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 250px', gap: '2rem' }}>
          {/* Main Content */}
          <div>
            <Paper shadow="sm" radius="md" p="xl" mb="xl">
              {/* Article Header */}
              <Stack gap="lg" mb="xl">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <Group gap="xs">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="light"
                        color="teal"
                        size="sm"
                        style={{ textTransform: 'capitalize' }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                )}

                {/* Title */}
                <Title order={1} size="h1" fw={600} lh={1.2}>
                  {post.title}
                </Title>

                {/* Excerpt */}
                {post.excerpt && (
                  <Text size="lg" c="dimmed" lh={1.6}>
                    {post.excerpt}
                  </Text>
                )}

                {/* Meta Information */}
                <Group justify="space-between" wrap="wrap">
                  <Group gap="lg">
                    <Group gap="xs">
                      <Avatar size={32} radius="xl" color="teal">
                        {post.author_name.charAt(0).toUpperCase()}
                      </Avatar>
                      <div>
                        <Text size="sm" fw={500}>
                          {post.author_name}
                        </Text>
                        <Group gap="xs" c="dimmed">
                          <IconCalendar size={14} />
                          <Text size="xs">
                            {post.published_at ? formatDate(post.published_at) : 'Draft'}
                          </Text>
                        </Group>
                      </div>
                    </Group>

                    {post.read_time_minutes && (
                      <Group gap="xs" c="dimmed">
                        <IconClock size={14} />
                        <Text size="sm">{post.read_time_minutes} min read</Text>
                      </Group>
                    )}
                  </Group>

                  {/* Action Buttons */}
                  <Group gap="xs">
                    <ActionIcon
                      variant={isLiked ? 'filled' : 'subtle'}
                      color="red"
                      onClick={handleLike}
                      size="lg"
                    >
                      <IconHeart size={18} />
                    </ActionIcon>
                    <ActionIcon
                      variant={isBookmarked ? 'filled' : 'subtle'}
                      color="yellow"
                      onClick={handleBookmark}
                      size="lg"
                    >
                      <IconBookmark size={18} />
                    </ActionIcon>
                    <SocialShare post={post} />
                  </Group>
                </Group>

                {/* Featured Image */}
                {post.featured_image_url && (
                  <Box>
                    <Image
                      src={post.featured_image_url}
                      alt={post.title}
                      radius="md"
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                  </Box>
                )}
              </Stack>

              <Divider mb="xl" />

              {/* Article Content */}
              <BlogContent 
                content={post.content} 
                onTocUpdate={setTocItems}
              />

              <Divider my="xl" />

              {/* Article Footer */}
              <Group justify="space-between" wrap="wrap">
                <Group gap="lg">
                  <Text size="sm" c="dimmed">
                    Published on {post.published_at ? formatDate(post.published_at) : 'Draft'}
                  </Text>
                  {post.updated_at !== post.created_at && (
                    <Text size="sm" c="dimmed">
                      Updated on {formatDate(post.updated_at)}
                    </Text>
                  )}
                </Group>

                <Group gap="xs">
                  <ActionIcon
                    variant={isLiked ? 'filled' : 'subtle'}
                    color="red"
                    onClick={handleLike}
                  >
                    <IconHeart size={16} />
                  </ActionIcon>
                  <ActionIcon
                    variant={isBookmarked ? 'filled' : 'subtle'}
                    color="yellow"
                    onClick={handleBookmark}
                  >
                    <IconBookmark size={16} />
                  </ActionIcon>
                  <SocialShare post={post} />
                </Group>
              </Group>
            </Paper>

            {/* Related Articles */}
            <RelatedArticles currentPost={post} />

            {/* Comments Section */}
            <CommentSection postId={post.id} />
          </div>

          {/* Sidebar */}
          <div>
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </Container>

      {/* Scroll to Top Button */}
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scrollProgress > 10}>
          {(transitionStyles) => (
            <ActionIcon
              size="lg"
              variant="filled"
              color="teal"
              onClick={scrollToTop}
              style={transitionStyles}
            >
              <IconArrowUp size={18} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default BlogPost;