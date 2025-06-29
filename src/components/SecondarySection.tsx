import React from 'react';
import AnimatedElement from './AnimatedElement';

const SecondarySection = () => {
  return (
    <section className="h-auto min-h-[80vh] bg-white flex items-center py-24 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Systems Integration Section */}
        <div className="text-center">
          <AnimatedElement as="h2" className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900 mb-16 md:mb-20 lg:mb-24">
            Expert in the systems you already use
          </AnimatedElement>
          
          {/* Systems Integration Radar - GitHub hosted with fallback */}
          <div className="flex justify-center">
            <AnimatedElement 
              delay={200} 
              duration={800} 
              animationType="scale-up"
              className="w-[26rem] h-[26rem] md:w-[31rem] md:h-[31rem] lg:w-[36rem] lg:h-[36rem] relative"
            >
              <img 
                src="https://raw.githubusercontent.com/montu2100/revflyer_project/refs/heads/main/assets/tools_radar.svg" 
                alt="Integration Network - Connected ecosystem of your favorite tools"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-center p-8"
                style={{display: 'none'}}
              >
                <div>
                  <div className="text-lg font-medium mb-2">Integration Network</div>
                  <div className="text-sm">Connected ecosystem of your favorite tools</div>
                  <div className="text-xs mt-2 text-red-500">Image failed to load from GitHub</div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;