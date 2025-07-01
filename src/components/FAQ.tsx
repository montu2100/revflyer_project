import React from 'react';
import { Accordion } from '@mantine/core';
import { Plus } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const FAQ = () => {
  const faqs = [
    {
      question: 'What exactly is Revenue Operations (RevOps)?',
      answer: 'Revenue Operations (RevOps) is the strategic alignment of sales, marketing, and customer success operations to drive predictable revenue growth. It involves breaking down silos between departments, implementing unified processes, and leveraging data analytics to optimize the entire revenue cycle from lead generation to customer retention.'
    },
    {
      question: 'What size companies do you typically work with?',
      answer: 'We work with B2B SaaS companies ranging from Series A startups to Fortune 500 enterprises, typically with $1M+ in annual recurring revenue. Our solutions are scalable and can be tailored to meet the specific needs of growing companies at any stage of their revenue operations maturity.'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Most implementations take 3-6 months depending on complexity, with quick wins typically achieved within the first 30 days. We follow a phased approach that allows you to see immediate improvements while building toward long-term strategic goals. The timeline varies based on your current systems, team size, and specific requirements.'
    },
    {
      question: 'Do we need to replace our existing tech stack?',
      answer: 'Not necessarily. We work with your existing systems and recommend changes only when they will significantly improve your operations. Our approach is to first optimize what you have, then strategically enhance or replace tools that are creating bottlenecks or inefficiencies in your revenue process.'
    },
    {
      question: 'What makes RevFlyer different from other consultants?',
      answer: 'We combine strategic expertise with hands-on implementation, ensuring your team can maintain and optimize the systems we build together. Unlike traditional consultants who deliver reports and leave, we work alongside your team to implement solutions and provide ongoing support to ensure sustainable success.'
    },
    {
      question: 'How does pricing work?',
      answer: 'Our pricing is project-based and depends on scope and complexity. We provide detailed proposals after our initial consultation. We believe in transparent pricing with no hidden fees, and we work with you to structure engagements that deliver maximum value within your budget constraints.'
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <AnimatedElement as="h2" className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 font-serif">
            Frequently Asked Questions
          </AnimatedElement>
        </div>

        {/* Mantine-Style FAQ Accordion */}
        <AnimatedElement delay={200}>
          <Accordion
            chevronPosition="right"
            defaultValue="revops-definition"
            chevronSize={26}
            variant="separated"
            disableChevronRotation
            styles={{
              label: { 
                color: 'var(--charcoal-900)',
                fontSize: '1.125rem',
                fontWeight: 500,
                lineHeight: 1.5,
                fontFamily: 'Adamina, serif'
              },
              item: { 
                border: 0,
                backgroundColor: 'white',
                borderRadius: '12px',
                marginBottom: '16px',
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                '&[data-active]': {
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }
              },
              control: {
                padding: '1.75rem',
                '&:hover': {
                  backgroundColor: 'rgb(249 250 251)'
                }
              },
              content: {
                padding: '0 1.75rem 1.75rem 1.75rem'
              },
              panel: {
                color: 'var(--charcoal-600)',
                fontSize: '1rem',
                lineHeight: 1.6
              }
            }}
            chevron={
              <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Plus size={16} className="text-white" strokeWidth={2} />
              </div>
            }
          >
            <Accordion.Item value="revops-definition">
              <Accordion.Control>{faqs[0].question}</Accordion.Control>
              <Accordion.Panel>{faqs[0].answer}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="company-size">
              <Accordion.Control>{faqs[1].question}</Accordion.Control>
              <Accordion.Panel>{faqs[1].answer}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="implementation-timeline">
              <Accordion.Control>{faqs[2].question}</Accordion.Control>
              <Accordion.Panel>{faqs[2].answer}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="tech-stack">
              <Accordion.Control>{faqs[3].question}</Accordion.Control>
              <Accordion.Panel>{faqs[3].answer}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="differentiator">
              <Accordion.Control>{faqs[4].question}</Accordion.Control>
              <Accordion.Panel>{faqs[4].answer}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="pricing">
              <Accordion.Control>{faqs[5].question}</Accordion.Control>
              <Accordion.Panel>{faqs[5].answer}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FAQ;