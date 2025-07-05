import React from 'react';
import { Paper, Title, SimpleGrid, Card, Text, Group, Badge, Anchor } from '@mantine/core';
import { IconCalendar, IconClock } from '@tabler/icons-react';
import { BlogPost } from '../../types/blog';
import { useBlogPosts } from '../../hooks/useBlogPosts';

interface RelatedArticlesProps {
  currentPost: BlogPost;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentPost }) => {
  const { posts } = useBlogPosts();
  
  // Filter out current post and get related posts based on tags
  const relatedPosts = posts
    .filter(post => post.id !== currentPost.id)
    .filter(post => {
      // Find posts with at least one matching tag
      return post.tags.some(tag => currentPost.tags.includes(tag));
    })
    .slice(0, 3);

  // If no related posts by tags, get recent posts
  const displayPosts = relatedPosts.length > 0 
    ? relatedPosts 
    : posts.filter(post => post.id !== currentPost.id).slice(0, 3);

  if (displayPosts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Paper shadow="sm" radius="md" p="xl" mb="xl">
      <Title order={3} mb="lg">
        Related Articles
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {displayPosts.map((post) => (
          <Card key={post.id} shadow="sm" padding="lg" radius="md" withBorder>
            {post.featured_image_url && (
              <Card.Section>
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  style={{ height: '160px', objectFit: 'cover', width: '100%' }}
                />
              </Card.Section>
            )}

            <Group justify="space-between" mt="md" mb="xs">
              {post.tags.length > 0 && (
                <Badge color="teal" variant="light" size="sm">
                  {post.tags[0]}
                </Badge>
              )}
            </Group>

            <Anchor
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Text fw={500} size="sm" lineClamp={2} mb="xs">
                {post.title}
              </Text>
            </Anchor>

            <Text size="xs" c="dimmed" lineClamp={3} mb="md">
              {post.excerpt}
            </Text>

            <Group gap="xs" c="dimmed">
              <IconCalendar size={14} />
              <Text size="xs">
                {post.published_at ? formatDate(post.published_at) : 'Draft'}
              </Text>
              {post.read_time_minutes && (
                <>
                  <IconClock size={14} />
                  <Text size="xs">{post.read_time_minutes} min</Text>
                </>
              )}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Paper>
  );
};

export default RelatedArticles;