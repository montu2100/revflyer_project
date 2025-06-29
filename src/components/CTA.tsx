import React from 'react';
import { Button } from '@mantine/core';

const CTA = () => {
  return (
    <>
      {/* Blog Preview Section (3 cards) */}
      <section className="py-16 md:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Cards with 4:3 aspect ratio images */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent-200 to-accent-300"></div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-medium text-charcoal-900 mb-3">
                  Interesting title for this content
                </h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="text-primary-900 text-sm md:text-base hover:underline transition-colors">
                  Read more →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary-200 to-secondary-300"></div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-medium text-charcoal-900 mb-3">
                  Interesting title for this content
                </h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="text-primary-900 text-sm md:text-base hover:underline transition-colors">
                  Read more →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent-200 to-primary-300"></div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-medium text-charcoal-900 mb-3">
                  Interesting title for this content
                </h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="text-primary-900 text-sm md:text-base hover:underline transition-colors">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Removed fixed height constraints */}
      <section className="bg-secondary-50 flex items-center py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Rounded border container with 2px border and more rounded corners */}
            <div className="max-w-3xl mx-auto border-2 border-charcoal-200 rounded-xl p-8 md:p-12 bg-white/50 backdrop-blur-sm">
              <div className="space-y-6 md:space-y-8">
                <p className="text-sm text-charcoal-400 uppercase tracking-wide">
                  Your flight to new revenue acceleration
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900">
                  Let's talk RevOps!
                </h2>
                <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
                  Ready to accelerate your revenue growth? Let's discuss how RevFlyer can transform your operations.
                </p>
                <Button 
                  size="lg"
                  variant="filled"
                  className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-md transition-all duration-200 text-base md:text-lg"
                >
                  Talk To An Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;