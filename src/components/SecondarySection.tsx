import React, { useState, useEffect } from 'react';
import AnimatedElement from './AnimatedElement';
import ToolsRadarAnimation from './ToolsRadarAnimation';

const SecondarySection = () => {
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if the device is mobile (using width as a simple check)
    const isMobile = window.innerWidth <= 768;
    
    // Set state based on these checks
    setIsMobileOrReducedMotion(prefersReducedMotion || isMobile);
    
    // Add resize listener to update state if window size changes
    const handleResize = () => {
      setIsMobileOrReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
        window.innerWidth <= 768
      );
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id="about" className="h-auto min-h-[80vh] bg-white flex items-center py-24 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Systems Integration Section */}
        <div className="text-center">
          <AnimatedElement as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-16 md:mb-20 lg:mb-24">
            Expert in the systems you already use
          </AnimatedElement>
          
          <div className="flex justify-center">
            <AnimatedElement 
              delay={200} 
              duration={800} 
              animationType="scale-up"
              disabled={isMobileOrReducedMotion}
            >
              {isMobileOrReducedMotion ? (
                <img 
                  src="/tools_radar.svg" 
                  alt="Tools and integrations radar" 
                  className="w-full max-w-[600px]"
                />
              ) : (
                <ToolsRadarAnimation />
              )}
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;