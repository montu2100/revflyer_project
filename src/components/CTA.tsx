import React from 'react';
import { Button } from '@mantine/core';
import AnimatedElement from './AnimatedElement';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const CTA = () => {
  const { containerRef, isVisible } = useStaggeredAnimation(3, 100);

  return (
    <>
      {/* Blog Preview Section (3 cards) - Insights Section */}
      <section id="insights" className="py-20 md:py-24 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <AnimatedElement as="p" className="text-sm text-charcoal-400 mb-6 uppercase tracking-wide">
              LATEST INSIGHTS
            </AnimatedElement>
            
            <AnimatedElement delay={100} as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-8 lg:mb-10">
              Revenue Operations Insights
            </AnimatedElement>
            
            <AnimatedElement delay={200} as="p" className="text-charcoal-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Stay ahead with the latest trends, strategies, and best practices in revenue operations.
            </AnimatedElement>
          </div>

          {/* Content Cards with 4:3 aspect ratio images */}
          <div ref={containerRef} className="grid md:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-24 lg:mb-28">
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms cubic-bezier(0.33, 1, 0.68, 1) 0ms, transform 600ms cubic-bezier(0.33, 1, 0.68, 1) 0ms'
              }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent-200 to-accent-300"></div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-base md:text-lg font-medium text-charcoal-900 mb-4">
                  Optimizing Your Sales Funnel for Maximum Revenue
                </h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  Learn how to identify bottlenecks in your sales process and implement data-driven strategies to accelerate revenue growth.
                </p>
                <a href="#" className="text-primary-900 text-sm md:text-base hover:underline transition-colors">
                  Read more →
                </a>
              </div>
            </div>

            <div 
              className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms cubic-bezier(0.33, 1, 0.68, 1) 100ms, transform 600ms cubic-bezier(0.33, 1, 0.68, 1) 100ms'
              }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary-200 to-secondary-300"></div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-base md:text-lg font-medium text-charcoal-900 mb-4">
                  The Complete Guide to CRM Implementation
                </h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  Step-by-step strategies for successful CRM deployment, data migration, and team adoption to maximize your investment.
                </p>
                <a href="#" className="text-primary-900 text-sm md:text-base hover:underline transition-colors">
                  Read more →
                </a>
              </div>
            </div>

            <div 
              className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms cubic-bezier(0.33, 1, 0.68, 1) 200ms, transform 600ms cubic-bezier(0.33, 1, 0.68, 1) 200ms'
              }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent-200 to-primary-300"></div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-base md:text-lg font-medium text-charcoal-900 mb-4">
                  Building a Data-Driven Revenue Operations Team
                </h3>
                <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  Essential frameworks and tools for creating a high-performing RevOps team that drives predictable revenue growth.
                </p>
                <a href="#" className="text-primary-900 text-sm md:text-base hover:underline transition-colors">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-secondary-50 flex items-center py-20 md:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Rounded border container with 2px border and more rounded corners */}
            <AnimatedElement className="max-w-3xl mx-auto border-2 border-charcoal-200 rounded-xl p-10 md:p-12 lg:p-14 bg-white/50 backdrop-blur-sm">
              <div className="space-y-8 md:space-y-10">
                <AnimatedElement delay={100} as="p" className="text-sm text-charcoal-400 uppercase tracking-wide">
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