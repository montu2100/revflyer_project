import React from 'react';
import { Check } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { containerRef, isVisible } = useStaggeredAnimation(3, 100);

  const services = [
    {
      title: 'Revenue Enablement',
      description: 'Comprehensive revenue operations strategy and sales enablement solutions to accelerate your growth.',
      features: [
        'Revenue forecasting & sales enablement',
        'Pipeline management & lead qualification',
        'Territory transformation & optimization',
        'Sales process optimization',
        'Performance analytics & reporting',
        'Sales team training & onboarding'
      ]
    },
    {
      title: 'CRM Services',
      description: 'Expert CRM implementation and optimization to streamline your customer relationship management.',
      features: [
        'Salesforce, HubSpot & Pipedrive setup',
        'Data migration & cleanup',
        'Custom field configuration',
        'Workflow automation via Zapier & Make',
        'Integration with existing tools',
        'User training & adoption support'
      ]
    },
    {
      title: 'Technical Services',
      description: 'Advanced technical solutions and custom integrations to power your revenue operations.',
      features: [
        'API development & custom integrations',
        'Database management & optimization',
        'Advanced lead scoring models',
        'Predictive analytics & insights',
        'Technical consulting & architecture',
        'Data-driven decision frameworks'
      ]
    }
  ];

  return (
    <>
      {/* Services Introduction Section */}
      <section className="min-h-[60vh] flex items-center bg-secondary-50 py-20 md:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 lg:space-y-10">
            <AnimatedElement as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 max-w-3xl mx-auto leading-tight">
              Outsource RevOps complexity to power your revenue engine
            </AnimatedElement>
            
            <AnimatedElement delay={200} as="p" className="text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-3xl mx-auto">
              RevFlyer's comprehensive revenue operations platform gives you the competitive advantage you need. Through expert process design, workflow automation, and optimization, RevFlyer can streamline your revenue operations.
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section id="services" className="py-20 md:py-24 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <AnimatedElement as="p" className="text-sm text-charcoal-400 mb-6 uppercase tracking-wide font-medium">
              RevFlyer Partnerships
            </AnimatedElement>
            
            <AnimatedElement delay={100} as="h3" className="text-xl md:text-2xl lg:text-3xl font-normal text-charcoal-900 mb-8 lg:mb-10">
              All the expertise you need in one RevFlyer partnership.
            </AnimatedElement>
            
            <AnimatedElement delay={200} as="p" className="text-charcoal-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Every RevFlyer partnership is tailored to your needs to ensure you and your team get all the extra mile.
            </AnimatedElement>
          </div>

          {/* Service Cards Grid */}
          <div ref={containerRef} className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                  transition: `opacity 600ms cubic-bezier(0.33, 1, 0.68, 1) ${index * 100}ms, transform 600ms cubic-bezier(0.33, 1, 0.68, 1) ${index * 100}ms`
                }}
              >
                <div className="bg-white rounded-lg border border-charcoal-200 p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Service Header */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-normal text-charcoal-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* What's Included Section */}
                  <div className="flex-grow">
                    <h4 className="text-xs font-medium text-charcoal-900 tracking-wide mb-6">
                      <span className="uppercase font-medium">What's Included</span>
                    </h4>
                    
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-5 h-5 bg-primary-900 rounded-full flex items-center justify-center">
                              <Check size={12} className="text-white" strokeWidth={2.5} />
                            </div>
                          </div>
                          <span className="text-charcoal-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;