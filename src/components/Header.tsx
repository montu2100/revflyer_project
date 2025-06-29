import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@mantine/core';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50 h-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/montu2100/revflyer_project/refs/heads/main/assets/logo_green_banner_whitebackground_300x100.svg" 
                alt="RevFlyer" 
                className="h-14 w-auto" 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm">
              About
            </a>
            <a href="#services" className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm">
              Services
            </a>
            <a href="#insights" className="text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm">
              Insights
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="filled" 
              className="bg-primary-900 hover:bg-primary-800 text-white text-sm px-6 py-2 rounded-md transition-all duration-200"
            >
              Book a free consultation
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
              <a href="#about" className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm">
                About
              </a>
              <a href="#services" className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm">
                Services
              </a>
              <a href="#insights" className="block text-charcoal-600 hover:text-charcoal-900 transition-colors duration-200 text-sm">
                Insights
              </a>
              <Button 
                variant="filled" 
                className="bg-primary-900 hover:bg-primary-800 text-white text-sm w-full mt-4"
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