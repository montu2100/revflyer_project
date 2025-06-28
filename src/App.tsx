import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SecondarySection from './components/SecondarySection';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <SecondarySection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;