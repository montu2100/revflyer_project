import React, { useState, useEffect } from 'react';
import { Paper, Title, Stack, Anchor, Box, Affix } from '@mantine/core';
import { TableOfContentsItem } from '../../types/blog';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <Affix position={{ top: 100, right: 20 }}>
      <Paper shadow="sm" radius="md" p="md" style={{ width: '250px', maxHeight: '70vh', overflowY: 'auto' }}>
        <Title order={4} size="h5" mb="md" c="dimmed">
          Table of Contents
        </Title>
        <Stack gap="xs">
          {items.map((item) => (
            <Anchor
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              style={{
                paddingLeft: `${(item.level - 1) * 12}px`,
                fontSize: item.level === 1 ? '14px' : '13px',
                fontWeight: item.level === 1 ? 500 : 400,
                color: activeId === item.id ? '#339af0' : '#666',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                lineHeight: 1.4
              }}
              onMouseEnter={(e) => {
                if (activeId !== item.id) {
                  e.currentTarget.style.color = '#339af0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeId !== item.id) {
                  e.currentTarget.style.color = '#666';
                }
              }}
            >
              {item.title}
            </Anchor>
          ))}
        </Stack>
      </Paper>
    </Affix>
  );
};

export default TableOfContents;