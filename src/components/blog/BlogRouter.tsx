import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Header from '../Header';
import Footer from '../Footer';

const BlogRouter: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPostWrapper />} />
            <Route path="/" element={<Navigate to="/blog" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const BlogPostWrapper: React.FC = () => {
  const slug = window.location.pathname.split('/').pop() || '';
  return <BlogPost slug={slug} />;
};

export default BlogRouter;