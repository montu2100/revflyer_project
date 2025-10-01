import React from 'react';
import { Accordion } from '@mantine/core';
import { Plus } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const FAQ = () => {
  const faqQuestions = [
    {
      question: 'What exactly is Revenue Operations?',
      answer: 'Revenue Operations (RevOps) aligns your sales, marketing, and customer success teams under unified processes, systems, and data. Instead of teams working in silos with different goals, RevOps creates one coordinated revenue engine that drives predictable growth.'
    },
    {
      question: 'How is RevOps different from Sales Operations?',
      answer: 'Sales Ops focuses only on the sales team - CRM management, territories, compensation. RevOps takes a holistic approach, aligning all revenue-generating functions (sales, marketing, customer success) to work together seamlessly.'
    },
    {
      question: 'What\'s the difference between your Fractional RevOps and hiring a full-time RevOps person?',
      answer: 'Our Fractional RevOps gives you senior-level expertise at a fraction of the cost, with no benefits, equity, or long-term commitments. You get strategic guidance immediately rather than spending months recruiting and onboarding.'
    },
    {
      question: 'How quickly can you get started?',
      answer: 'We can typically begin within 48 hours for Fractional RevOps advisory and within a week for implementation services like HubSpot setup or Tactical Support.'
    },
    {
      question: 'Do we need to have existing RevOps processes in place?',
      answer: 'Not at all. Whether you\'re starting from scratch or have fragmented processes, we\'ll assess where you are and build the right solution for your current stage.'
    },
    {
      question: 'What size companies do you work with?',
      answer: 'We work with scaling businesses from Series A startups to established companies. If you have separate sales, marketing, and customer success functions that need alignment, we can help.'
    },
    {
      question: 'How do you ensure our teams actually adopt new processes?',
      answer: 'That\'s where our Revenue Enablement service comes in. We don\'t just build processes - we train your teams, create adoption programs, and provide ongoing coaching to ensure sustainable change.'
    },
    {
      question: 'Can you work with our existing tech stack?',
      answer: 'Absolutely. Our Tactical Support service includes tech stack audits and optimization. We\'ll work with what you have and recommend changes only when they genuinely improve efficiency and make sense.'
    },
    {
      question: 'What if we\'re already using HubSpot but it\'s not working well?',
      answer: 'Our HubSpot Implementation & Migration service includes optimisation of existing setups. We\'ll audit your current configuration and fix what\'s not working properly.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No. Our Fractional RevOps operates on flexible terms, and our project-based services have clear timelines and deliverables. We earn your continued business through results, not contracts.'
    },
    {
      question: 'Will you work directly with our team or just provide recommendations?',
      answer: 'We embed with your team as partners, not external consultants. You\'ll have direct access to our experts who understand your business and can make decisions in real-time.'
    },
    {
      question: 'What happens if our needs change during the engagement?',
      answer: 'We\'re built for flexibility. As your business evolves, we can adjust our services - scaling up tactical support, adding AI automation, or shifting strategic focus as needed.'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <AnimatedElement as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900" style={{ fontFamily: 'Adamina, Georgia, "Times New Roman", serif' }}>
            Frequently Asked Questions
          </AnimatedElement>
        </div>

        {/* FAQ Questions */}
        <AnimatedElement>
          <Accordion
            chevronPosition="right"
            chevronSize={26}
            variant="separated"
            disableChevronRotation
            styles={{
              label: { 
                color: 'var(--charcoal-900)',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5,
                fontFamily: 'Adamina, Georgia, "Times New Roman", serif'
              },
              item: { 
                border: 0,
                backgroundColor: 'white',
                borderRadius: '12px',
                marginBottom: '12px',
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&[data-active]': {
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }
              },
              control: {
                padding: '1.25rem',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgb(249 250 251)'
                }
              },
              content: {
                padding: '0 1.25rem 1.25rem 1.25rem'
              },
              panel: {
                color: 'var(--charcoal-600)',
                fontSize: '1rem',
                lineHeight: 1.6,
                fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }
            }}
            chevron={
              <div className="w-5 h-5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center transition-transform duration-300">
                <Plus size={14} className="text-white" strokeWidth={2} />
              </div>
            }
          >
            {faqQuestions.map((faq, questionIndex) => (
              <Accordion.Item 
                key={questionIndex} 
                value={questionIndex.toString()}
              >
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FAQ;