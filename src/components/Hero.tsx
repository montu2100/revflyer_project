import React from 'react';
import { Button } from '@mantine/core';
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  return (
    <section className="bg-cream-50 h-screen min-h-[70vh] md:min-h-[80vh] lg:min-h-screen pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center h-full">
          {/* Content - 60% width */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <AnimatedElement delay={200} as="h1" className="text-4xl md:text-5xl lg:text-6xl font-normal text-charcoal-900 leading-tight">
                Accelerate Your Revenue Growth with RevFlyer.
              </AnimatedElement>
              
              <AnimatedElement delay={400} as="p" className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl">
                Everything you need to elevate your revenue operations, whether you're enterprise-level or just taking off.
              </AnimatedElement>
            </div>

            {/* CTA Buttons */}
            <AnimatedElement delay={600} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                variant="filled"
                className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-md transition-all duration-200 text-base"
              >
                Get a consultation - it's free
              </Button>
            </AnimatedElement>

            {/* Trust Indicator */}
            <AnimatedElement delay={800} className="pt-4">
              <p className="text-sm text-charcoal-400 leading-relaxed max-w-md">
                Contact us to learn how RevFlyer can help your organization streamline and enhance operations. Our team will be in touch within 24 hours.
              </p>
            </AnimatedElement>
          </div>

          {/* Visual Element - 40% width */}
          <div className="lg:col-span-2 relative">
            <AnimatedElement delay={400} animationType="scale-up" className="relative">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
                <div className="space-y-6">
                  {/* Simple geometric illustration placeholder */}
                  <div className="w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br from-accent-200 via-secondary-200 to-secondary-300 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-accent-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;