import React from 'react';
import { Button } from '@mantine/core';

const Hero = () => {
  return (
    <section className="bg-cream-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Content - 60% width */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-tight">
                Accelerate Your Revenue Growth with RevFlyer.
              </h1>
              
              <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl">
                Everything you need to elevate your revenue operations, whether you're enterprise-level or just taking off.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                size="lg"
                variant="filled"
                className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-md transition-all duration-200 text-base"
              >
                Book a discovery call, today! 
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4">
              <p className="text-sm text-charcoal-400 leading-relaxed max-w-md">
                Contact us to learn how RevFlyer can help your organization streamline and enhance operations. Our team will be in touch within 24 hours.
              </p>
            </div>
          </div>

          {/* Visual Element - 40% width */}
          <div className="lg:col-span-2 relative">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <div className="space-y-6">
                {/* Simple geometric illustration placeholder */}
                <div className="w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br from-accent-200 via-secondary-200 to-secondary-300 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;