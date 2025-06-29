import React from 'react';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import { IconTrendingUp, IconDatabase, IconCode } from '@tabler/icons-react';
import AnimatedElement from './AnimatedElement';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import classes from './CardGradient.module.css';

const Services = () => {
  const { containerRef, isVisible } = useStaggeredAnimation(3, 100);

  const services = [
    {
      icon: IconTrendingUp,
      title: 'Revenue Enablement',
      gradient: { deg: 135, from: '#6B9B8A', to: '#86b5a6' },
      cardClass: classes.revenueCard,
      items: [
        'Revenue forecasting, sales enablement and territory management',
        'Pipeline management and lead qualification',
        'Territory Transformation',
        'Sales process optimization and territory management'
      ]
    },
    {
      icon: IconDatabase,
      title: 'CRM Services',
      gradient: { deg: 135, from: '#063D3B', to: '#2a7d65' },
      cardClass: classes.crmCard,
      items: [
        'We implement clean set-up of Salesforce, HubSpot, Pipedrive and other CRMs',
        'Data Migration',
        'Custom field configuration and workflow automation via Zapier, n8n or Make'
      ]
    },
    {
      icon: IconCode,
      title: 'Technical Services',
      gradient: { deg: 135, from: '#F4C542', to: '#fbe083' },
      cardClass: classes.technicalCard,
      items: [
        'API development, custom integration design, and technical consulting',
        'Database Management',
        'Advanced lead scoring, predictive modeling, and data-driven insights'
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

      {/* Mantine Service Cards Section */}
      <section id="services" className="py-20 md:py-24 lg:py-28 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <AnimatedElement as="p" className="text-sm text-charcoal-400 mb-6 uppercase tracking-wide">
              REVFLYER PARTNERSHIPS
            </AnimatedElement>
            
            <AnimatedElement delay={100} as="h3" className="text-xl md:text-2xl lg:text-3xl font-normal text-charcoal-900 mb-8 lg:mb-10">
              All the expertise you need in one RevFlyer partnership.
            </AnimatedElement>
            
            <AnimatedElement delay={200} as="p" className="text-charcoal-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Every RevFlyer partnership is tailored to your needs to ensure you and your team get all the extra mile.
            </AnimatedElement>
          </div>

          {/* Mantine Cards Grid */}
          <div ref={containerRef} className="grid md:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                  transition: `opacity 600ms cubic-bezier(0.33, 1, 0.68, 1) ${index * 100}ms, transform 600ms cubic-bezier(0.33, 1, 0.68, 1) ${index * 100}ms`
                }}
              >
                <Paper 
                  withBorder 
                  radius="md" 
                  className={`${classes.card} ${service.cardClass}`}
                  style={{
                    '--primary-900': '#063D3B',
                    '--primary-800': '#0B4240',
                    '--primary-600': '#2a7d65',
                    '--primary-500': '#389a7d',
                    '--secondary-700': '#4a7366',
                    '--secondary-600': '#5a8a78',
                    '--secondary-500': '#6B9B8A',
                    '--secondary-400': '#86b5a6',
                    '--accent-700': '#bb8518',
                    '--accent-600': '#e0a821',
                    '--accent-500': '#F4C542',
                    '--accent-400': '#f8d051'
                  } as React.CSSProperties}
                >
                  <ThemeIcon
                    size="xl"
                    radius="md"
                    variant="gradient"
                    gradient={service.gradient}
                    mb="md"
                  >
                    <service.icon size={28} stroke={1.5} />
                  </ThemeIcon>
                  
                  <Text size="xl" fw={500} mt="md" mb="lg" style={{ color: '#2D2D2D' }}>
                    {service.title}
                  </Text>
                  
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-charcoal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                          {item}
                        </Text>
                      </div>
                    ))}
                  </div>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;