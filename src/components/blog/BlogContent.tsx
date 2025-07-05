import React, { useEffect, useRef } from 'react';
import { TypographyStylesProvider, Box } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TableOfContentsItem } from '../../types/blog';

interface BlogContentProps {
  content: string;
  onTocUpdate: (items: TableOfContentsItem[]) => void;
}

const BlogContent: React.FC<BlogContentProps> = ({ content, onTocUpdate }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Extract headings for table of contents
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const tocItems: TableOfContentsItem[] = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        return {
          id,
          title: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        };
      });
      
      onTocUpdate(tocItems);
    }
  }, [content, onTocUpdate]);

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      
      if (!inline && match) {
        return (
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            customStyle={{
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '1.5'
            }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      
      return (
        <code
          className={className}
          style={{
            backgroundColor: '#f1f3f4',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.9em',
            fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
          }}
          {...props}
        >
          {children}
        </code>
      );
    },
    
    img({ src, alt, ...props }: any) {
      return (
        <Box my="lg">
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
            {...props}
          />
          {alt && (
            <Box mt="xs" ta="center">
              <em style={{ fontSize: '0.9em', color: '#666' }}>{alt}</em>
            </Box>
          )}
        </Box>
      );
    },
    
    blockquote({ children, ...props }: any) {
      return (
        <Box
          my="lg"
          p="md"
          style={{
            borderLeft: '4px solid #339af0',
            backgroundColor: '#f8f9fa',
            borderRadius: '0 8px 8px 0',
            fontStyle: 'italic'
          }}
          {...props}
        >
          {children}
        </Box>
      );
    },
    
    table({ children, ...props }: any) {
      return (
        <Box my="lg" style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid #dee2e6'
            }}
            {...props}
          >
            {children}
          </table>
        </Box>
      );
    },
    
    th({ children, ...props }: any) {
      return (
        <th
          style={{
            padding: '12px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            fontWeight: 600,
            textAlign: 'left'
          }}
          {...props}
        >
          {children}
        </th>
      );
    },
    
    td({ children, ...props }: any) {
      return (
        <td
          style={{
            padding: '12px',
            border: '1px solid #dee2e6'
          }}
          {...props}
        >
          {children}
        </td>
      );
    }
  };

  return (
    <Box ref={contentRef}>
      <TypographyStylesProvider>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={components}
        >
          {content}
        </ReactMarkdown>
      </TypographyStylesProvider>
    </Box>
  );
};

export default BlogContent;