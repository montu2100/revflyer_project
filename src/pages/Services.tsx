import React from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Grid, 
  Card, 
  List, 
  ThemeIcon, 
  Badge, 
  Button, 
  Stack, 
  Group,
  Divider,
  Box,
  Paper,
  SimpleGrid
} from '@mantine/core';
import { 
  IconCheck, 
  IconTrendingUp, 
  IconUsers, 
  IconTarget, 
  IconBrain, 
  IconRocket,
  IconArrowRight,
  IconChartBar,
  IconSettings,
  IconBulb
} from '@tabler/icons-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';

const Services: React.FC = () => {
  const services = [
    {
      id: 'fractional-revops',
      title: 'Fractional RevOps',
      icon: IconTrendingUp,
      description: 'Strategic revenue operations leadership without the full-time commitment. Perfect for growing companies that need expert guidance.',
      features: [
        'Strategic RevOps planning and execution',
        'Cross-functional team alignment',
        'Process optimization and standardization',
        'Technology stack evaluation and recommendations',
        'Performance metrics and KPI development',
        'Scalable systems implementation'
      ],
      benefits: [
        'Access to senior-level expertise',
        'Cost-effective alternative to full-time hire',
        'Flexible engagement model',
        'Immediate impact on revenue operations'
      ],
      idealFor: 'Series A-C companies, 50-500 employees, $5M-$50M ARR',
      color: 'teal'
    },
    {
      id: 'tactical-support',
      title: 'Tactical Support',
      icon: IconSettings,
      description: 'Hands-on implementation support for specific RevOps initiatives. Get expert help when you need it most.',
      features: [
        'CRM configuration and optimization',
        'Sales process documentation',
        'Lead routing and qualification setup',
        'Reporting and dashboard creation',
        'Data cleanup and migration',
        'Integration implementation'
      ],
      benefits: [
        'Quick turnaround on specific projects',
        'Expert implementation guidance',
        'Knowledge transfer to your team',
        'Reduced time to value'
      ],
      idealFor: 'Companies with existing RevOps teams needing specialized support',
      color: 'blue'
    },
    {
      id: 'revenue-enablement',
      title: 'Revenue Enablement',
      icon: IconUsers,
      description: 'Comprehensive sales and marketing enablement to accelerate revenue growth and improve team performance.',
      features: [
        'Sales playbook development',
        'Training program design and delivery',
        'Content creation and management',
        'Onboarding process optimization',
        'Performance coaching frameworks',
        'Competitive intelligence systems'
      ],
      benefits: [
        'Faster sales rep ramp time',
        'Improved win rates and deal velocity',
        'Consistent messaging across teams',
        'Enhanced sales productivity'
      ],
      idealFor: 'Sales teams of 10+ reps, high-growth companies',
      color: 'orange'
    },
    {
      id: 'gtm-strategy',
      title: 'GTM Strategy',
      icon: IconTarget,
      description: 'End-to-end go-to-market strategy development for new products, markets, or business model changes.',
      features: [
        'Market analysis and segmentation',
        'Ideal customer profile development',
        'Pricing and packaging strategy',
        'Channel strategy and partner enablement',
        'Launch planning and execution',
        'Success metrics and tracking'
      ],
      benefits: [
        'Reduced time to market',
        'Higher launch success rates',
        'Clear go-to-market roadmap',
        'Aligned cross-functional execution'
      ],
      idealFor: 'Product launches, market expansion, new business lines',
      color: 'grape'
    },
    {
      id: 'ai-automation',
      title: 'AI-Enabled Revenue Automation',
      icon: IconBrain,
      description: 'Leverage artificial intelligence and automation to scale your revenue operations and improve efficiency.',
      features: [
        'AI-powered lead scoring and routing',
        'Automated workflow design',
        'Predictive analytics implementation',
        'Chatbot and conversational AI setup',
        'Revenue forecasting models',
        'Process automation optimization'
      ],
      benefits: [
        'Increased operational efficiency',
        'Better lead qualification accuracy',
        'Reduced manual work',
        'Improved forecasting precision'
      ],
      idealFor: 'Tech-forward companies, high-volume sales processes',
      color: 'violet'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We start with a comprehensive analysis of your current revenue operations, identifying gaps and opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a customized strategy aligned with your business goals and growth objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our team works alongside yours to implement solutions, ensuring knowledge transfer and sustainable adoption.'
    },
    {
      step: '04',
      title: 'Optimization & Scale',
      description: 'We continuously monitor performance and optimize processes to ensure maximum ROI and scalable growth.'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Revenue Operations Services | RevFlyer - Expert RevOps Consulting</title>
      <meta 
        name="description" 
        content="Comprehensive revenue operations services including Fractional RevOps, GTM Strategy, Revenue Enablement, and AI-powered automation. Transform your revenue operations with RevFlyer's expert consulting services." 
      />
      <meta 
        name="keywords" 
        content="revenue operations services, fractional revops, GTM strategy, revenue enablement, sales operations, marketing automation, RevFlyer services" 
      />

      <Header />
      
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="bg-cream-50 py-20 md:py-24 lg:py-28">
          <Container size="lg">
            <div className="text-center mb-16">
              <AnimatedElement>
                <Badge 
                  size="lg" 
                  variant="light" 
                  color="teal" 
                  className="mb-6"
                >
                  Our Services
                </Badge>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <Title 
                  order={1} 
                  className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal-900 mb-6 font-serif"
                >
                  Revenue Operations Services
                </Title>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <Text 
                  size="xl" 
                  className="text-charcoal-600 max-w-3xl mx-auto leading-relaxed"
                >
                  From strategic fractional leadership to hands-on tactical support, 
                  we provide comprehensive revenue operations services tailored to your 
                  business needs and growth stage.
                </Text>
              </AnimatedElement>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-24 lg:py-28 bg-white">
          <Container size="lg">
            <Stack gap="xl">
              {services.map((service, index) => (
                <AnimatedElement key={service.id} delay={index * 100}>
                  <Card 
                    shadow="sm" 
                    padding="xl" 
                    radius="md" 
                    withBorder
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <Grid>
                      <Grid.Col span={{ base: 12, md: 8 }}>
                        <Group mb="md">
                          <ThemeIcon 
                            size={50} 
                            radius="md" 
                            color={service.color}
                            variant="light"
                          >
                            <service.icon size={28} />
                          </ThemeIcon>
                          <div>
                            <Title order={2} className="text-charcoal-900 font-serif">
                              {service.title}
                            </Title>
                            <Text size="sm" c="dimmed">
                              {service.idealFor}
                            </Text>
                          </div>
                        </Group>

                        <Text size="lg" className="text-charcoal-600 mb-lg">
                          {service.description}
                        </Text>

                        <Title order={4} size="md" mb="sm" className="text-charcoal-900">
                          What's Included:
                        </Title>
                        <List
                          spacing="xs"
                          size="sm"
                          icon={
                            <ThemeIcon color={service.color} size={20} radius="xl">
                              <IconCheck size={12} />
                            </ThemeIcon>
                          }
                        >
                          {service.features.map((feature, idx) => (
                            <List.Item key={idx}>{feature}</List.Item>
                          ))}
                        </List>
                      </Grid.Col>

                      <Grid.Col span={{ base: 12, md: 4 }}>
                        <Paper p="md" bg="gray.0" radius="md">
                          <Title order={5} size="sm" mb="sm" className="text-charcoal-900">
                            Key Benefits:
                          </Title>
                          <List size="sm" spacing="xs">
                            {service.benefits.map((benefit, idx) => (
                              <List.Item key={idx} icon="•">
                                {benefit}
                              </List.Item>
                            ))}
                          </List>
                          
                          <Button 
                            fullWidth 
                            mt="md"
                            color={service.color}
                            rightSection={<IconArrowRight size={16} />}
                            data-cal-link="revflyer/discovery-call"
                            data-cal-namespace="discovery-call"
                            data-cal-config='{"layout":"month_view"}'
                          >
                            Learn More
                          </Button>
                        </Paper>
                      </Grid.Col>
                    </Grid>
                  </Card>
                </AnimatedElement>
              ))}
            </Stack>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-24 lg:py-28 bg-secondary-50">
          <Container size="lg">
            <div className="text-center mb-16">
              <AnimatedElement>
                <Title 
                  order={2} 
                  className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-6 font-serif"
                >
                  Our Proven Process
                </Title>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <Text 
                  size="lg" 
                  className="text-charcoal-600 max-w-2xl mx-auto"
                >
                  We follow a structured approach to ensure successful outcomes 
                  and sustainable growth for your revenue operations.
                </Text>
              </AnimatedElement>
            </div>

            <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
              {processSteps.map((step, index) => (
                <AnimatedElement key={step.step} delay={index * 100}>
                  <Card 
                    shadow="sm" 
                    padding="lg" 
                    radius="md" 
                    className="text-center h-full"
                    bg="white"
                  >
                    <ThemeIcon 
                      size={60} 
                      radius="xl" 
                      color="teal" 
                      variant="light"
                      className="mx-auto mb-md"
                    >
                      <Text size="xl" fw={700} c="teal">
                        {step.step}
                      </Text>
                    </ThemeIcon>
                    
                    <Title order={4} size="md" mb="sm" className="text-charcoal-900">
                      {step.title}
                    </Title>
                    
                    <Text size="sm" className="text-charcoal-600">
                      {step.description}
                    </Text>
                  </Card>
                </AnimatedElement>
              ))}
            </SimpleGrid>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-24 lg:py-28 bg-white">
          <Container size="lg">
            <div className="text-center mb-16">
              <AnimatedElement>
                <Title 
                  order={2} 
                  className="text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal-900 mb-6 font-serif"
                >
                  Proven Results
                </Title>
              </AnimatedElement>
            </div>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
              <AnimatedElement>
                <div className="text-center">
                  <Text size="3rem" fw={700} c="teal" className="font-serif">
                    25%
                  </Text>
                  <Text size="lg" fw={500} className="text-charcoal-900">
                    Average Revenue Growth
                  </Text>
                  <Text size="sm" c="dimmed">
                    Within 6 months of engagement
                  </Text>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={100}>
                <div className="text-center">
                  <Text size="3rem" fw={700} c="teal" className="font-serif">
                    40%
                  </Text>
                  <Text size="lg" fw={500} className="text-charcoal-900">
                    Faster Sales Cycles
                  </Text>
                  <Text size="sm" c="dimmed">
                    Through process optimization
                  </Text>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <div className="text-center">
                  <Text size="3rem" fw={700} c="teal" className="font-serif">
                    60%
                  </Text>
                  <Text size="lg" fw={500} className="text-charcoal-900">
                    Reduction in Manual Tasks
                  </Text>
                  <Text size="sm" c="dimmed">
                    Via automation implementation
                  </Text>
                </div>
              </AnimatedElement>
            </SimpleGrid>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 lg:py-28 bg-primary-900">
          <Container size="lg">
            <div className="text-center">
              <AnimatedElement>
                <Title 
                  order={2} 
                  className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-6 font-serif"
                >
                  Ready to Transform Your Revenue Operations?
                </Title>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <Text 
                  size="lg" 
                  className="text-secondary-200 max-w-2xl mx-auto mb-8"
                >
                  Let's discuss how our services can accelerate your revenue growth 
                  and optimize your operations for sustainable success.
                </Text>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <Group justify="center" gap="md">
                  <Button 
                    size="lg"
                    variant="white"
                    color="dark"
                    rightSection={<IconRocket size={20} />}
                    data-cal-link="revflyer/discovery-call"
                    data-cal-namespace="discovery-call"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Schedule Discovery Call
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    color="white"
                    rightSection={<IconChartBar size={20} />}
                    component="a"
                    href="mailto:hello@revflyer.com"
                  >
                    Request Proposal
                  </Button>
                </Group>
              </AnimatedElement>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;