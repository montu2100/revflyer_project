import React from 'react';
import { Button } from '@mantine/core';
import AnimatedElement from './AnimatedElement';
import BlogSection from './BlogSection';

const CTA = () => {
  return (
    <>
      {/* Blog Section - Dynamic content from Supabase */}
      <BlogSection />

      {/* Final CTA Section */}
      <section className="bg-secondary-50 flex items-center py-20 md:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Rounded border container with 2px border and more rounded corners */}
            <AnimatedElement className="max-w-3xl mx-auto border-2 border-charcoal-200 rounded-xl p-10 md:p-12 lg:p-14 bg-white/50 backdrop-blur-sm">
              <div className="space-y-8 md:space-y-10">
                <AnimatedElement delay={100} as="p" className="text-sm text-charcoal-400 tracking-wide">
                  Your flight to new revenue acceleration
                </AnimatedElement>
                
                <AnimatedElement delay={200} as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900">
                  Let's talk RevOps!
                </AnimatedElement>
                
                <AnimatedElement delay={300} as="p" className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
                  Ready to accelerate your revenue growth? Let's discuss how RevFlyer can transform your operations.
                </AnimatedElement>
                
                <AnimatedElement delay={400} className="pt-2">
                  <Button 
                    size="lg"
                    variant="filled"
                    className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-md transition-all duration-200 text-base md:text-lg"
                    data-cal-link="revflyer/discovery-call"
                    data-cal-namespace="discovery-call"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Talk To An Expert
                  </Button>
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;