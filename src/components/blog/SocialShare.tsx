import React from 'react';
import { ActionIcon, Menu } from '@mantine/core';
import { IconShare, IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconLink } from '@tabler/icons-react';
import { BlogPost } from '../../types/blog';

interface SocialShareProps {
  post: BlogPost;
}

const SocialShare: React.FC<SocialShareProps> = ({ post }) => {
  const currentUrl = window.location.href;
  const title = post.title;
  const description = post.excerpt || post.title;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      // TODO: Show notification that link was copied
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon variant="subtle" color="blue" size="lg">
          <IconShare size={18} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Share this article</Menu.Label>
        
        <Menu.Item
          leftSection={<IconBrandTwitter size={16} />}
          onClick={() => openShareWindow(shareUrls.twitter)}
        >
          Twitter
        </Menu.Item>
        
        <Menu.Item
          leftSection={<IconBrandLinkedin size={16} />}
          onClick={() => openShareWindow(shareUrls.linkedin)}
        >
          LinkedIn
        </Menu.Item>
        
        <Menu.Item
          leftSection={<IconBrandFacebook size={16} />}
          onClick={() => openShareWindow(shareUrls.facebook)}
        >
          Facebook
        </Menu.Item>
        
        <Menu.Divider />
        
        <Menu.Item
          leftSection={<IconLink size={16} />}
          onClick={copyToClipboard}
        >
          Copy Link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default SocialShare;