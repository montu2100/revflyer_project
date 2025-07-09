import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/Services';
import SecondarySection from './components/SecondarySection';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BlogRouter from './components/blog/BlogRouter';
import BlogPost from './components/blog/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Blog routes */}
          <Route path="/blog" element={<BlogRouter />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Services page */}
          <Route path="/services" element={<Services />} />
          
          {/* Main website */}
          <Route path="/" element={<MainWebsite />} />
        </Routes>
      </div>
    </Router>
  );
}

const MainWebsite: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ServicesSection />
      <SecondarySection />
      <FAQ />
      <CTA />
    </main>
    <Footer />
  </>
);

const BlogPostPage: React.FC = () => {
  const slug = window.location.pathname.split('/').pop() || '';
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <BlogPost slug={slug} />
      </main>
      <Footer />
    </>
  );
};

export default App;