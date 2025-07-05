import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  TextInput,
  Group,
  Badge,
  Button,
  Stack,
  Paper,
  Pagination,
  Center
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import { ArticleCard } from '../ArticleCard';

const BlogList: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Get all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort();

  // Filter posts based on search and tag
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  if (loading) {
    return (
      <Container size="lg" py="xl">
        <Center>
          <Text>Loading articles...</Text>
        </Center>
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="lg" py="xl">
        <Center>
          <Stack align="center">
            <Text c="red">Error loading articles</Text>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </Stack>
        </Center>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      {/* Header */}
      <Stack align="center" mb="xl">
        <Title order={1} ta="center">
          RevFlyer Blog
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Insights, strategies, and best practices for revenue operations excellence
        </Text>
      </Stack>

      {/* Search and Filters */}
      <Paper shadow="sm" radius="md" p="lg" mb="xl">
        <Stack gap="md">
          <TextInput
            placeholder="Search articles..."
            leftSection={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            size="md"
          />
          
          <Group gap="xs">
            <Text size="sm" fw={500}>
              Filter by topic:
            </Text>
            <Button
              variant={selectedTag === null ? 'filled' : 'light'}
              size="xs"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? 'filled' : 'light'}
                size="xs"
                onClick={() => setSelectedTag(tag)}
                style={{ textTransform: 'capitalize' }}
              >
                {tag}
              </Button>
            ))}
          </Group>
        </Stack>
      </Paper>

      {/* Results Info */}
      <Group justify="space-between" mb="lg">
        <Text size="sm" c="dimmed">
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          {selectedTag && ` in "${selectedTag}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </Text>
      </Group>

      {/* Articles Grid */}
      {paginatedPosts.length > 0 ? (
        <>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg" mb="xl">
            {paginatedPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </SimpleGrid>

          {/* Pagination */}
          {totalPages > 1 && (
            <Center>
              <Pagination
                value={currentPage}
                onChange={setCurrentPage}
                total={totalPages}
                size="md"
              />
            </Center>
          )}
        </>
      ) : (
        <Center py="xl">
          <Stack align="center">
            <Text size="lg" c="dimmed">
              No articles found
            </Text>
            <Text size="sm" c="dimmed">
              Try adjusting your search or filter criteria
            </Text>
            <Button
              variant="light"
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
            >
              Clear Filters
            </Button>
          </Stack>
        </Center>
      )}
    </Container>
  );
};

export default BlogList;