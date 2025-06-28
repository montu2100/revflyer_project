import React from 'react';

const Services = () => {
  return (
    <>
      {/* Services Introduction Section */}
      <section className="min-h-[60vh] flex items-center bg-secondary-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900 max-w-3xl mx-auto leading-tight">
              Outsource RevOps complexity to power your revenue engine
            </h2>
            <p className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-3xl mx-auto">
              RevFlyer's comprehensive revenue operations platform gives you the competitive advantage you need. Through expert process design, workflow automation, and optimization, RevFlyer can streamline your revenue operations.
            </p>
          </div>
        </div>
      </section>

      {/* Mantine-Style Features Cards Section */}
      <section id="services" className="py-16 md:py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm text-charcoal-400 mb-4 uppercase tracking-wide">REVFLYER PARTNERSHIPS</p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-6">
              All the expertise you need in one RevFlyer partnership.
            </h3>
            <p className="text-charcoal-600 max-w-2xl mx-auto text-lg">
              Every RevFlyer partnership is tailored to your needs to ensure you and your team get all the extra mile.
            </p>
          </div>

          {/* Mantine-Style Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Revenue Enablement Card */}
            <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden">
              {/* Card Header */}
              <div className="p-6 md:p-8 pb-4">
                <h4 className="text-xl md:text-2xl font-medium text-charcoal-900 mb-4">
                  Revenue Enablement
                </h4>
              </div>

              {/* Card Content */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Revenue forecasting, sales enablement and territory management
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Pipeline management and lead qualification
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Territory Transformation
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Sales process optimization and territory management
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/20 group-hover:to-secondary-50/10 transition-all duration-300 pointer-events-none"></div>
            </div>

            {/* CRM Services Card */}
            <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-secondary-200 overflow-hidden">
              {/* Card Header */}
              <div className="p-6 md:p-8 pb-4">
                <h4 className="text-xl md:text-2xl font-medium text-charcoal-900 mb-4">
                  CRM Services
                </h4>
              </div>

              {/* Card Content */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      We implement clean set-up of Salesforce, HubSpot, Pipedrive and other CRMs
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Data Migration
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Custom field configuration and workflow automation via Zapier
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/0 to-primary-50/0 group-hover:from-secondary-50/20 group-hover:to-primary-50/10 transition-all duration-300 pointer-events-none"></div>
            </div>

            {/* Technical Services Card */}
            <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent-200 overflow-hidden">
              {/* Card Header */}
              <div className="p-6 md:p-8 pb-4">
                <h4 className="text-xl md:text-2xl font-medium text-charcoal-900 mb-4">
                  Technical Services
                </h4>
              </div>

              {/* Card Content */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      API development, custom integration design, and technical consulting
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Database Management
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-600 text-sm md:text-base leading-relaxed">
                      Advanced lead scoring, predictive modeling, and data-driven insights
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50/0 to-secondary-50/0 group-hover:from-accent-50/20 group-hover:to-secondary-50/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;