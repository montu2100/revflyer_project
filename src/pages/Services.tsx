import React from 'react';
import { 
  Container, 
  Title, 
  Text, 
  SimpleGrid, 
  Card, 
  List, 
  Badge, 
  Button, 
  Stack, 
  Group,
  Box,
  Paper,
  ThemeIcon
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
  IconBulb,
  IconCog,
  IconHeadset,
  IconZap
} from '@tabler/icons-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';

const Services: React.FC = () => {
  const peasFramework = [
    {
      title: 'Process',
      icon: IconSettings,
      description: "We'll design workflows that actually get your teams working together, not against each other",
      color: 'teal'
    },
    {
      title: 'Enablement',
      icon: IconUsers,
      description: "Your teams get the tools, training, and playbooks they need to close more deals",
      color: 'blue'
    },
    {
      title: 'Advisory',
      icon: IconChartBar,
      description: "We analyse your data to give you insights that drive real decisions, not just pretty reports",
      color: 'grape'
    },
    {
      title: 'Systems',
      icon: IconSettings,
      description: "We'll audit and optimise your tech stack so everything talks to each other properly",
      color: 'orange'
    }
  ];

  const benefits = [
    "One unified way of working across people, data and process",
    "Complete visibility and collaboration across teams – no more blind spots",
    "Improved operational efficiencies through better alignment and enablement"
  ];

  const services = [
    {
      badge: 'Implementation',
      title: 'HubSpot Implementation & Migration',
      subtitle: 'Get HubSpot Working For Your Business, Not Against It',
      description: "Most HubSpot implementations are overcomplicated messes. We'll set yours up properly from the start. Our certified experts work with you through every step - scoping, implementation, training, and testing - to ensure your investment actually pays off.",
      services: [
        "HubSpot Configuration & Setup – We'll configure everything to match how your revenue operations and business actually works",
        "Data Migration & Integration – Clean transfer and mapping of your existing data without the usual headaches",
        "Training & Adoption – Hands-on training that gets your team master and actually using the platform"
      ],
      cta: 'Book HubSpot Consulting',
      icon: IconRocket,
      badgeColor: 'teal'
    },
    {
      badge: 'Advisory',
      title: 'Fractional RevOps Advisory',
      subtitle: 'Expert-Level RevOps Leadership Without Internal Overhead',
      description: "Need senior RevOps strategy but can't justify the hire? Get strategic RevOps leadership that stays three steps ahead of your business needs without the overhead. Our fractional RevOps experts embed as your strategic advisors to set direction, measure performance, and guide your revenue transformation.",
      services: [
        "Expert Advisory & Strategy – C-level RevOps insights and strategic direction tied to measurable revenue outcomes",
        "RevOps Roadmap & Planning – Strategic roadmaps that define the right priorities that match where you business is today",
        "Ongoing guidance to keep initiatives on track and adjust strategy based on real performance data"
      ],
      cta: 'Book Fractional RevOps Consulting',
      icon: IconTrendingUp,
      badgeColor: 'blue'
    },
    {
      badge: 'Support',
      title: 'Tactical Support',
      subtitle: 'Technical RevOps Execution to Drive Operational Excellence',
      description: "Stop wasting your strategic talent on CRM admin and system maintenance. We handle the technical heavy lifting and day-to-day operations, freeing your team to focus on strategy and growth initiatives that actually move revenue.",
      services: [
        "Admin Support & Maintenance – CRM management, user support, and technical troubleshooting",
        "Technical Implementation & Integration – Hands-on setup, configuration, and optimization of your RevOps tech stack",
        "Data Operations & Reporting – Automated data cleanup, dashboard creation, and operational reporting infrastructure"
      ],
      cta: 'Book Tactical RevOps Support',
      icon: IconHeadset,
      badgeColor: 'orange'
    },
    {
      badge: 'Enablement',
      title: 'Revenue Enablement',
      subtitle: 'Transform Team Performance Across Your Revenue Organisation',
      description: "Great strategy means nothing if teams can't execute consistently. We develop the people, processes, and capabilities needed to turn your revenue strategy into predictable performance across sales, marketing, and customer success.",
      services: [
        "Sales Playbooks & Process Standardisation – Proven methodologies, deal progression frameworks, and playbooks that actually get used by your teams",
        "Skills Training & Performance Development – Role-specific training and programs that drives real improvements in win rates and team performance",
        "Technology Training & Adoption – Training and adoption programs that ensure your tech investments pay off instead of gathering digital dust"
      ],
      cta: 'Book Revenue Enablement Services',
      icon: IconTarget,
      badgeColor: 'grape'
    },
    {
      badge: 'Automation',
      title: 'AI-Powered Automation',
      subtitle: 'Let AI Handle the Repetitive Stuff While Your Team Focuses on Closing',
      description: "Manual lead routing, proposal writing, and forecasting are killing your team's productivity. We'll implement AI workflows that handle the routine tasks automatically, so your people can spend time on what humans do best - building relationships and closing deals.",
      services: [
        "Lead Handling & Qualification – Smart routing and AI-powered qualification that gets the right leads to the right person at the right time",
        "Proposal Generation & Content – Automated, data-driven proposals and sales content tailored to prospects without the manual grind",
        "Forecasting & Pipeline Intelligence – AI insights that actually help you predict revenue and spot risks before they become problems"
      ],
      cta: 'Book AI-Powered Automation',
      icon: IconBrain,
      badgeColor: 'violet'
    }
  ];

  return (
    <>
      <Header />
      
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <Box
          style={{
            background: 'linear-gradient(135deg, #0f766e 0%, #1e40af 100%)',
            color: 'white',
            paddingTop: '4rem',
            paddingBottom: '4rem'
          }}
        >
          <Container size="lg">
            <Stack align="center" gap="xl" style={{ textAlign: 'center' }}>
              <AnimatedElement>
                <Title order={1} size="3rem" fw={700} style={{ lineHeight: 1.2 }}>
                  What is RevOps
                </Title>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <Text size="xl" fw={500} maw={800} style={{ lineHeight: 1.6 }}>
                  Revenue teams are stuck in silos, and it's costing you growth. At RevFlyer, we don't just identify the problem - we fix it.
                </Text>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <Text size="lg" maw={900} style={{ lineHeight: 1.6, opacity: 0.9 }}>
                  We transform fragmented revenue operations into unified growth engines using our proven PEAS framework: Process, Enablement, Advisory, and Systems.
                </Text>
              </AnimatedElement>
            </Stack>
          </Container>
        </Box>

        {/* PEAS Framework Section */}
        <Container size="lg" py="4rem">
          <Stack gap="3rem">
            <AnimatedElement>
              <Title order={2} ta="center" size="2.5rem" fw={600} c="dark">
                The PEAS Framework
              </Title>
            </AnimatedElement>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              {peasFramework.map((item, index) => (
                <AnimatedElement key={item.title} delay={index * 100}>
                  <Card shadow="md" radius="md" padding="xl" h="100%">
                    <Group mb="md">
                      <ThemeIcon size={50} radius="md" color={item.color} variant="light">
                        <item.icon size={28} />
                      </ThemeIcon>
                      <Title order={3} size="1.5rem" fw={600}>
                        {item.title}
                      </Title>
                    </Group>
                    <Text size="md" c="dimmed" style={{ lineHeight: 1.6 }}>
                      {item.description}
                    </Text>
                  </Card>
                </AnimatedElement>
              ))}
            </SimpleGrid>

            {/* Benefits Section */}
            <AnimatedElement delay={400}>
              <Paper shadow="sm" radius="md" p="xl" bg="gray.0">
                <Title order={3} size="1.25rem" fw={600} mb="md" ta="center">
                  What You Get
                </Title>
                <List
                  spacing="sm"
                  size="md"
                  center
                  icon={
                    <ThemeIcon color="teal" size={20} radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  {benefits.map((benefit, index) => (
                    <List.Item key={index}>{benefit}</List.Item>
                  ))}
                </List>
              </Paper>
            </AnimatedElement>
          </Stack>
        </Container>

        {/* Services Grid */}
        <Box bg="gray.1" py="4rem">
          <Container size="lg">
            <Stack gap="3rem">
              <AnimatedElement>
                <Title order={2} ta="center" size="2.5rem" fw={600} c="dark" mb="lg">
                  Our Services
                </Title>
              </AnimatedElement>

              <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
                {services.map((service, index) => (
                  <AnimatedElement key={service.title} delay={index * 100}>
                    <Card 
                      shadow="md" 
                      radius="md" 
                      padding="xl" 
                      h="100%"
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <Stack gap="md" style={{ flex: 1 }}>
                        <Group justify="space-between" align="flex-start">
                          <Badge 
                            size="lg" 
                            variant="light" 
                            color={service.badgeColor}
                          >
                            {service.badge}
                          </Badge>
                          <ThemeIcon 
                            size={40} 
                            radius="md" 
                            color={service.badgeColor} 
                            variant="light"
                          >
                            <service.icon size={24} />
                          </ThemeIcon>
                        </Group>

                        <Stack gap="xs">
                          <Title order={3} size="lg" fw={500} lh={1.3}>
                            {service.title}
                          </Title>
                          <Text size="md" fw={500} c="teal" lh={1.4}>
                            {service.subtitle}
                          </Text>
                        </Stack>

                        <Text size="sm" c="dimmed" lh={1.5} style={{ flex: 1 }}>
                          {service.description}
                        </Text>

                        <Stack gap="xs">
                          <Text size="sm" fw={500} c="dark">
                            What's Included:
                          </Text>
                          <List
                            spacing="xs"
                            size="sm"
                            icon={
                              <ThemeIcon color={service.badgeColor} size={16} radius="xl">
                                <IconCheck size={10} />
                              </ThemeIcon>
                            }
                          >
                            {service.services.map((item, idx) => (
                              <List.Item key={idx} style={{ lineHeight: 1.4 }}>
                                {item}
                              </List.Item>
                            ))}
                          </List>
                        </Stack>

                        <Button 
                          variant="light" 
                          color={service.badgeColor}
                          rightSection={<IconArrowRight size={16} />}
                          mt="auto"
                          data-cal-link="revflyer/discovery-call"
                          data-cal-namespace="discovery-call"
                          data-cal-config='{"layout":"month_view"}'
                        >
                          {service.cta}
                        </Button>
                      </Stack>
                    </Card>
                  </AnimatedElement>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Final CTA Section */}
        <Box
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: 'white',
            paddingTop: '4rem',
            paddingBottom: '4rem'
          }}
        >
          <Container size="lg">
            <Stack align="center" gap="xl" style={{ textAlign: 'center' }}>
              <AnimatedElement>
                <Title order={2} size="2.5rem" fw={600}>
                  Ready to Transform Your Revenue Operations?
                </Title>
              </AnimatedElement>
              
              <AnimatedElement delay={100}>
                <Text size="lg" maw={600} style={{ lineHeight: 1.6, opacity: 0.9 }}>
                  Let's discuss how our proven PEAS framework can accelerate your growth
                </Text>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <Button 
                  size="lg"
                  variant="filled"
                  color="teal"
                  rightSection={<IconRocket size={20} />}
                  data-cal-link="revflyer/discovery-call"
                  data-cal-namespace="discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  style={{
                    fontSize: '1.1rem',
                    padding: '0.75rem 2rem',
                    height: 'auto'
                  }}
                >
                  Schedule Consultation
                </Button>
              </AnimatedElement>
            </Stack>
          </Container>
        </Box>
      </main>

      <Footer />
    </>
  );
};

export default Services;