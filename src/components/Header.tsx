import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@mantine/core';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      
      // Calculate offset to account for header height and add some padding
      const headerHeight = 80; // 20 (h-20) * 4 = 80px
      const additionalPadding = 20;
      const offsetTop = targetElement.offsetTop - headerHeight - additionalPadding;
      
      // Smooth scroll with cross-browser compatibility
      if ('scrollBehavior' in document.documentElement.style) {
        // Modern browsers
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else {
        // Fallback for older browsers
        smoothScrollPolyfill(offsetTop);
      }
    }
  };

  // Polyfill for smooth scrolling in older browsers
  const smoothScrollPolyfill = (targetPosition: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // 800ms duration
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      
      window.scrollTo(0, startPosition + distance * easeOut);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 h-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/montu2100/revflyer_project/refs/heads/main/assets/logo_green_transparent_banner_300x100.svg" 
                alt="RevFlyer" 
                className="h-14 w-auto" 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('about');
              }}
              className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('services');
              }}
              className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
              href="/services" 
              className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#insights" 
              onClick={(e) => {
                e.preventDefault();
                // Check if we're on the main page or blog page
                if (window.location.pathname === '/') {
                  handleSmoothScroll('insights');
                } else {
                  window.location.href = '/#insights';
                }
              }}
              className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
            >
              Insights
            </a>
            <a 
              href="/blog" 
              className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
            >
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="filled" 
              className="bg-primary-900 hover:bg-primary-800 text-white text-xs px-6 py-2 rounded-md transition-all duration-200"
              data-cal-link="revflyer/discovery-call"
              data-cal-namespace="discovery-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll('about');
                }}
                className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
              >
                Services
              </a>
              <a 
                href="#insights" 
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname === '/') {
                    handleSmoothScroll('insights');
                  } else {
                    window.location.href = '/#insights';
                  }
                }}
                className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
              >
                Insights
              </a>
              <a 
                href="/blog" 
                className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm cursor-pointer"
              >
                Blog
              </a>
              <Button 
                variant="filled" 
                className="bg-primary-900 hover:bg-primary-800 text-white text-sm w-full mt-4"
                data-cal-link="revflyer/discovery-call"
                data-cal-namespace="discovery-call"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a free consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;