import React, { useState } from 'react';
import {
  Paper,
  Title,
  Textarea,
  Button,
  Group,
  Text,
  Avatar,
  Stack,
  Divider,
  ActionIcon,
  Box
} from '@mantine/core';
import { IconHeart, IconReply, IconThumbUp } from '@tabler/icons-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Sarah Johnson',
      content: 'Great article! This really helped me understand the RevOps implementation process better. The step-by-step approach is exactly what our team needed.',
      timestamp: '2 hours ago',
      likes: 5,
      replies: [
        {
          id: '1-1',
          author: 'RevFlyer Team',
          content: 'Thank you Sarah! We\'re glad this was helpful. Feel free to reach out if you have any questions during your implementation.',
          timestamp: '1 hour ago',
          likes: 2
        }
      ]
    },
    {
      id: '2',
      author: 'Mike Chen',
      content: 'The CRM integration section was particularly valuable. We\'re currently evaluating Salesforce vs HubSpot and this gives us a good framework for decision making.',
      timestamp: '5 hours ago',
      likes: 3
    }
  ]);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'Anonymous User', // In real app, get from auth
        content: newComment,
        timestamp: 'Just now',
        likes: 0
      };
      
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  return (
    <Paper shadow="sm" radius="md" p="xl">
      <Title order={3} mb="lg">
        Comments ({comments.length})
      </Title>

      {/* Comment Form */}
      <Stack gap="md" mb="xl">
        <Textarea
          placeholder="Share your thoughts on this article..."
          value={newComment}
          onChange={(e) => setNewComment(e.currentTarget.value)}
          minRows={3}
          autosize
        />
        <Group justify="flex-end">
          <Button 
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
            variant="filled"
            color="teal"
          >
            Post Comment
          </Button>
        </Group>
      </Stack>

      <Divider mb="lg" />

      {/* Comments List */}
      <Stack gap="lg">
        {comments.map((comment) => (
          <Box key={comment.id}>
            <Group align="flex-start" gap="md">
              <Avatar size={40} radius="xl" color="teal">
                {comment.author.charAt(0).toUpperCase()}
              </Avatar>
              
              <Box style={{ flex: 1 }}>
                <Group gap="xs" mb="xs">
                  <Text fw={500} size="sm">
                    {comment.author}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {comment.timestamp}
                  </Text>
                </Group>
                
                <Text size="sm" mb="xs" lh={1.5}>
                  {comment.content}
                </Text>
                
                <Group gap="xs">
                  <ActionIcon
                    variant="subtle"
                    size="sm"
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <IconThumbUp size={14} />
                  </ActionIcon>
                  <Text size="xs" c="dimmed">
                    {comment.likes}
                  </Text>
                  <ActionIcon variant="subtle" size="sm">
                    <IconReply size={14} />
                  </ActionIcon>
                  <Text size="xs" c="dimmed">
                    Reply
                  </Text>
                </Group>
                
                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <Box ml="md" mt="md" pl="md" style={{ borderLeft: '2px solid #e9ecef' }}>
                    <Stack gap="md">
                      {comment.replies.map((reply) => (
                        <Group key={reply.id} align="flex-start" gap="md">
                          <Avatar size={32} radius="xl" color="blue">
                            {reply.author.charAt(0).toUpperCase()}
                          </Avatar>
                          
                          <Box style={{ flex: 1 }}>
                            <Group gap="xs" mb="xs">
                              <Text fw={500} size="sm">
                                {reply.author}
                              </Text>
                              <Text size="xs" c="dimmed">
                                {reply.timestamp}
                              </Text>
                            </Group>
                            
                            <Text size="sm" mb="xs" lh={1.5}>
                              {reply.content}
                            </Text>
                            
                            <Group gap="xs">
                              <ActionIcon variant="subtle" size="sm">
                                <IconThumbUp size={14} />
                              </ActionIcon>
                              <Text size="xs" c="dimmed">
                                {reply.likes}
                              </Text>
                            </Group>
                          </Box>
                        </Group>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Box>
            </Group>
          </Box>
        ))}
      </Stack>

      {comments.length === 0 && (
        <Text ta="center" c="dimmed" py="xl">
          No comments yet. Be the first to share your thoughts!
        </Text>
      )}
    </Paper>
  );
};

export default CommentSection;