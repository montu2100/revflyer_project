import React from 'react';

const SecondarySection = () => {
  return (
    <section className="h-auto min-h-[80vh] bg-white flex items-center py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Systems Integration Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900 mb-12 md:mb-16">
            Expert in the systems you already use
          </h2>
          
          {/* Systems Integration Radar - Clean implementation */}
          <div className="flex justify-center">
            <img 
              src="/tools_radar copy.svg" 
              alt="Integration Network - Connected ecosystem of your favorite tools"
              className="w-[26rem] h-[26rem] md:w-[31rem] md:h-[31rem] lg:w-[36rem] lg:h-[36rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;