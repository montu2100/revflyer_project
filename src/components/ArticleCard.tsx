import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { BlogPost } from '../lib/supabase';
import classes from './ArticleCard.module.css';

interface ArticleCardProps {
  post: BlogPost;
  className?: string;
}

export function ArticleCard({ post, className = '' }: ArticleCardProps) {
  const theme = useMantineTheme();

  const handleCardClick = () => {
    // Navigate to the blog post page
    window.location.href = `/blog/${post.slug}`;
  };

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

  // Generate a fallback image URL if none provided
  const imageUrl = post.featured_image_url || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg';

  return (
    <Card 
      withBorder 
      radius="md" 
      className={`${classes.card} ${className}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <Card.Section>
        <Image 
          src={imageUrl} 
          height={180} 
          alt={post.title}
          fallbackSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        />
      </Card.Section>

      {/* Badge for read time */}
      {post.read_time_minutes && (
        <Badge 
          className={classes.rating} 
          variant="gradient" 
          gradient={{ from: 'teal', to: 'blue' }}
        >
          {post.read_time_minutes} min read
        </Badge>
      )}

      <div className={classes.content}>
        <Text className={classes.title} fw={500} component="div">
          {post.title}
        </Text>

        <Text fz="sm" c="dimmed" lineClamp={4} className={classes.description}>
          {post.excerpt || 'No excerpt available for this article.'}
        </Text>

        <Group justify="space-between" className={classes.footer}>
          <Center>
            <Avatar
              size={24}
              radius="xl"
              mr="xs"
              color="teal"
            >
              {post.author_name.charAt(0).toUpperCase()}
            </Avatar>
            <div>
              <Text fz="sm" inline>
                {post.author_name}
              </Text>
              {post.published_at && (
                <Text fz="xs" c="dimmed">
                  {formatDate(post.published_at)}
                </Text>
              )}
            </div>
          </Center>

          <Group gap={8} mr={0}>
            <ActionIcon className={classes.action} variant="subtle">
              <IconHeart size={16} color={theme.colors.red[6]} />
            </ActionIcon>
            <ActionIcon className={classes.action} variant="subtle">
              <IconBookmark size={16} color={theme.colors.yellow[7]} />
            </ActionIcon>
            <ActionIcon className={classes.action} variant="subtle">
              <IconShare size={16} color={theme.colors.blue[6]} />
            </ActionIcon>
          </Group>
        </Group>
      </div>
    </Card>
  );
}