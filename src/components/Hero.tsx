import React from 'react';
import { Button } from '@mantine/core';

const Hero = () => {
  return (
    <section className="bg-cream-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left side */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-tight">
                Elevate Your Revenue Operations with RevFlyer.
              </h1>
              
              <p className="text-xl md:text-2xl text-charcoal-600 leading-relaxed max-w-xl font-serif">
                We build intelligent systems that eliminate manual tasks while your team focuses on strategic growth. No more disconnected tools, data silos, or time-consuming processes. Everything you need to elevate your revenue operations, whether you're enterprise-level or just taking off.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                size="lg"
                variant="filled"
                className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-md transition-all duration-200 text-sm"
                data-cal-link="revflyer/discovery-call"
                data-cal-namespace="discovery-call"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a discovery call, today! 
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4">
              <p className="text-sm text-charcoal-400 leading-relaxed max-w-md">
                Contact us to learn how RevFlyer can help your organization streamline and enhance your revenue operations.
              </p>
            </div>
          </div>

          {/* Hero Image - Right side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none">
              <img 
                src="https://raw.githubusercontent.com/montu2100/revflyer_project/refs/heads/main/assets/hero_paperplances.svg" 
                alt="Paper planes illustration representing revenue growth and business acceleration"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if image fails to load */}
              <div 
                className="w-full h-80 bg-gradient-to-br from-accent-200 via-secondary-200 to-secondary-300 rounded-lg flex items-center justify-center text-charcoal-500 text-center p-8"
                style={{display: 'none'}}
              >
                <div>
                  <div className="text-lg font-medium mb-2">Hero Illustration</div>
                  <div className="text-sm">Paper planes representing growth</div>
                  <div className="text-xs mt-2 text-red-500">Image failed to load from GitHub</div>
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