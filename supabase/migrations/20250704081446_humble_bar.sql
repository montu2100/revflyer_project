/*
  # Blog Content Management Schema

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique, required)
      - `excerpt` (text, optional)
      - `content` (text, required)
      - `featured_image_url` (text, optional)
      - `author_name` (text, required)
      - `author_email` (text, optional)
      - `status` (text, default 'draft')
      - `published_at` (timestamp, optional)
      - `created_at` (timestamp, default now)
      - `updated_at` (timestamp, default now)
      - `tags` (text array, optional)
      - `read_time_minutes` (integer, optional)

  2. Security
    - Enable RLS on `posts` table
    - Add policy for public read access to published posts
    - Add policy for authenticated users to manage posts

  3. Indexes
    - Index on slug for fast lookups
    - Index on status and published_at for filtering
    - Index on tags for tag-based queries
*/

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image_url text,
  author_name text NOT NULL DEFAULT 'RevFlyer Team',
  author_email text,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  tags text[] DEFAULT '{}',
  read_time_minutes integer DEFAULT 5
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_status_published_idx ON posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS posts_tags_idx ON posts USING GIN(tags);

-- RLS Policies
CREATE POLICY "Anyone can read published posts"
  ON posts
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published' AND published_at IS NOT NULL);

CREATE POLICY "Authenticated users can manage posts"
  ON posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample blog posts
INSERT INTO posts (title, slug, excerpt, content, status, published_at, tags, read_time_minutes, featured_image_url) VALUES
(
  'Optimizing Your Sales Funnel for Maximum Revenue',
  'optimizing-sales-funnel-maximum-revenue',
  'Learn how to identify bottlenecks in your sales process and implement data-driven strategies to accelerate revenue growth.',
  '# Optimizing Your Sales Funnel for Maximum Revenue

Revenue optimization starts with understanding every stage of your sales funnel. In this comprehensive guide, we''ll explore proven strategies to identify bottlenecks, streamline processes, and accelerate your revenue growth.

## Understanding Your Current Funnel

Before optimization, you need visibility. Most companies struggle with:
- Inconsistent lead qualification
- Poor handoff processes between marketing and sales
- Lack of data-driven decision making
- Inefficient follow-up sequences

## Key Optimization Strategies

### 1. Lead Scoring and Qualification
Implement a robust lead scoring system that considers:
- Demographic fit
- Behavioral engagement
- Intent signals
- Company characteristics

### 2. Process Standardization
Create repeatable processes for:
- Lead handoffs
- Follow-up sequences
- Objection handling
- Closing procedures

### 3. Technology Integration
Leverage tools like:
- CRM automation
- Email sequences
- Analytics dashboards
- Predictive modeling

## Measuring Success

Track these critical metrics:
- Conversion rates by stage
- Time in each funnel stage
- Revenue per lead
- Customer acquisition cost

## Conclusion

Sales funnel optimization is an ongoing process. Start with data collection, identify your biggest bottlenecks, and implement changes systematically. The companies that master this process see 20-30% improvements in conversion rates within 90 days.',
  'published',
  now() - interval '7 days',
  ARRAY['sales', 'optimization', 'revenue', 'funnel'],
  8,
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
),
(
  'The Complete Guide to CRM Implementation',
  'complete-guide-crm-implementation',
  'Step-by-step strategies for successful CRM deployment, data migration, and team adoption to maximize your investment.',
  '# The Complete Guide to CRM Implementation

Implementing a CRM system is one of the most impactful decisions for your revenue operations. Done right, it becomes the backbone of your sales and marketing efforts. Done wrong, it becomes an expensive digital filing cabinet.

## Pre-Implementation Planning

### Define Your Requirements
- Current pain points
- Must-have features
- Integration needs
- User requirements
- Budget constraints

### Choose the Right Platform
Popular options include:
- **Salesforce**: Enterprise-grade, highly customizable
- **HubSpot**: User-friendly, great for growing companies
- **Pipedrive**: Simple, sales-focused interface

## Implementation Phases

### Phase 1: Data Preparation (Weeks 1-2)
- Audit existing data
- Clean and standardize records
- Map data fields
- Plan migration strategy

### Phase 2: System Configuration (Weeks 3-4)
- Set up custom fields
- Configure workflows
- Create user roles
- Establish security settings

### Phase 3: Data Migration (Week 5)
- Test migration with sample data
- Execute full migration
- Validate data integrity
- Set up integrations

### Phase 4: User Training (Weeks 6-7)
- Admin training
- End-user training
- Create documentation
- Establish support processes

### Phase 5: Go-Live and Optimization (Week 8+)
- Soft launch with pilot group
- Full rollout
- Monitor adoption
- Continuous optimization

## Common Pitfalls to Avoid

1. **Insufficient planning**: Rushing into implementation
2. **Poor data quality**: Migrating dirty data
3. **Lack of training**: Users reverting to old systems
4. **Over-customization**: Making the system too complex
5. **No change management**: Ignoring user resistance

## Measuring Success

Track these KPIs:
- User adoption rate
- Data quality scores
- Process efficiency gains
- Revenue impact

## Conclusion

CRM implementation is a marathon, not a sprint. Focus on getting the basics right, ensure strong user adoption, and continuously optimize based on user feedback and business needs.',
  'published',
  now() - interval '14 days',
  ARRAY['crm', 'implementation', 'salesforce', 'hubspot', 'technology'],
  12,
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
),
(
  'Building a Data-Driven Revenue Operations Team',
  'building-data-driven-revenue-operations-team',
  'Essential frameworks and tools for creating a high-performing RevOps team that drives predictable revenue growth.',
  '# Building a Data-Driven Revenue Operations Team

Revenue Operations (RevOps) has evolved from a nice-to-have function to a critical driver of business growth. Building a data-driven RevOps team requires the right people, processes, and technology working in harmony.

## The RevOps Team Structure

### Core Roles
- **RevOps Manager**: Strategy and cross-functional alignment
- **Sales Operations Analyst**: Process optimization and reporting
- **Marketing Operations Specialist**: Campaign and lead management
- **Data Analyst**: Insights and predictive modeling
- **Systems Administrator**: Technology management

### Skills Matrix
Each team member should have:
- Analytical thinking
- Process design
- Technology proficiency
- Business acumen
- Communication skills

## Essential Tools and Technologies

### CRM Platform
Your central source of truth:
- Customer data management
- Pipeline tracking
- Forecasting
- Reporting

### Marketing Automation
- Lead nurturing
- Campaign management
- Attribution tracking
- Behavioral scoring

### Analytics and BI
- Data visualization
- Performance dashboards
- Predictive analytics
- Custom reporting

### Integration Platform
- Data synchronization
- Workflow automation
- API management
- Error handling

## Key Processes to Establish

### 1. Lead Management
- Lead scoring criteria
- Routing rules
- SLA definitions
- Quality standards

### 2. Opportunity Management
- Stage definitions
- Exit criteria
- Required fields
- Approval processes

### 3. Forecasting
- Methodology
- Review cadence
- Accuracy tracking
- Scenario planning

### 4. Reporting and Analytics
- KPI definitions
- Dashboard standards
- Review schedules
- Action protocols

## Building a Data Culture

### Data Governance
- Data quality standards
- Ownership definitions
- Access controls
- Audit procedures

### Training and Enablement
- Data literacy programs
- Tool training
- Best practices
- Continuous learning

### Performance Management
- Data-driven goals
- Regular reviews
- Feedback loops
- Recognition programs

## Measuring Team Success

### Operational Metrics
- Data quality scores
- Process efficiency
- System adoption
- Error rates

### Business Impact
- Revenue growth
- Conversion improvements
- Cycle time reduction
- Forecast accuracy

## Common Challenges and Solutions

### Challenge: Data Silos
**Solution**: Implement integration platforms and establish data governance

### Challenge: Resistance to Change
**Solution**: Focus on change management and demonstrate quick wins

### Challenge: Tool Proliferation
**Solution**: Conduct regular tool audits and consolidate where possible

### Challenge: Skill Gaps
**Solution**: Invest in training and consider external partnerships

## Conclusion

Building a data-driven RevOps team is an investment in your company''s future. Start with the right foundation, focus on quick wins, and continuously evolve your capabilities. The most successful teams combine technical expertise with business acumen to drive measurable results.',
  'published',
  now() - interval '21 days',
  ARRAY['revops', 'team-building', 'data-driven', 'analytics', 'strategy'],
  15,
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
);