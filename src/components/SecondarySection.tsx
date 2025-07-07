import React from 'react';
import AnimatedElement from './AnimatedElement';
import ToolsRadarAnimation from './ToolsRadarAnimation';

const SecondarySection = () => {
  return (
    <section id="about" className="h-auto min-h-[80vh] bg-white flex items-center py-24 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Systems Integration Section */}
        <div className="text-center">
          <AnimatedElement as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-16 md:mb-20 lg:mb-24">
            Expert in the systems you already use
          </AnimatedElement>
          
          {/* Systems Integration Radar - GitHub hosted with fallback */}
          <div className="flex justify-center">
            <AnimatedElement delay={200} duration={800} animationType="scale-up">
              <ToolsRadarAnimation />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;