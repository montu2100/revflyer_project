import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white min-h-[300px]">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/montu2100/revflyer_project/refs/heads/main/assets/logo_white_banner_300x100.svg" 
                alt="RevFlyer" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-secondary-200 leading-relaxed text-sm max-w-sm">
              RevFlyer is the end-to-end partnership solution for revenue operations and growth. We help B2B companies streamline their revenue operations through expert consulting and implementation.
            </p>
            <p className="text-secondary-200 text-sm">
              Whether it's the complex, flexible RevOps consultancy you need, or the simple, streamlined approach you want, RevFlyer has the expertise to help you succeed. We provide comprehensive revenue operations and growth consulting services.
            </p>
          </div>

          {/* Expertise */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Expertise</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  Revenue Operations Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  Sales Process Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  CRM Implementation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  Marketing Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200 text-sm">
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white">Contact</h4>
            <div className="space-y-3">
              <p className="text-secondary-200 text-sm">
                Ready to accelerate your revenue growth?
              </p>
              <a href="mailto:hello@revflyer.com" className="text-white hover:text-accent-400 transition-colors text-sm">
                hello@revflyer.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-200">
              © 2024 RevFlyer. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-secondary-200">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;