export const navItems = [
  { label: "Track Record", href: "#track-record" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Why Us", href: "#edge" },
  { label: "Expertise", href: "#domains" },
  { label: "Programs", href: "#segmentation" },
  { label: "Teams", href: "#audiences" },
  { label: "Framework", href: "#framework" },
  { label: "Delivery", href: "#delivery" },
  { label: "FAQ", href: "#faq" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

/** Sections observed for scroll-spy (order affects fallback). */
export const scrollSpySectionIds = [
  "hero",
  "track-record",
  "partnerships",
  "edge",
  "domains",
  "segmentation",
  "audiences",
  "framework",
  "delivery",
  "faq",
  "testimonials",
  "contact",
] as const;

export const heroBullets = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
  "Measurable Impact",
] as const;

export const stats = [
  {
    value: "10K+",
    label: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    label: "Sessions delivered with unmatched learning excellence",
  },
  {
    value: "5K+",
    label: "Active learners engaged in dynamic courses",
  },
] as const;

export const domainCards = [
  { title: "Product & Innovation Hub", description: "Product strategy, discovery, and roadmaps.", tone: "violet" as const },
  { title: "Gen-AI Mastery", description: "Responsible AI adoption and applied generative AI.", tone: "cyan" as const },
  { title: "Leadership Elevation", description: "Executive presence, influence, and decision-making.", tone: "amber" as const },
  { title: "Tech & Data Insights", description: "Engineering excellence, analytics, and platforms.", tone: "blue" as const },
  { title: "Operations Excellence", description: "Lean processes, quality, and scale.", tone: "emerald" as const },
  { title: "Digital Enterprise", description: "Digital transformation and customer experience.", tone: "indigo" as const },
  { title: "Fintech Innovation Lab", description: "Payments, risk, and modern financial systems.", tone: "rose" as const },
] as const;

export const edgePillars = [
  { title: "Outcome-first design", body: "Programs anchored to business KPIs—not generic slide decks." },
  { title: "Practitioner faculty", body: "Leaders who have shipped, scaled, and coached at enterprise pace." },
  { title: "Embedded enablement", body: "Playbooks, office hours, and manager toolkits that sustain change." },
] as const;

export const deliverySteps = [
  "Discovery & alignment workshops with sponsors and people managers.",
  "Curriculum sprints with labs, capstones, and rubrics mapped to role expectations.",
  "Enablement kits: office hours, async refreshers, and measurement dashboards.",
] as const;

export const segmentationRows = [
  {
    title: "Program Specific",
    detail: "Certificate, Executive, Post Graduate Certificate",
  },
  {
    title: "Industry Specific",
    detail: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    title: "Topic Specific",
    detail: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    title: "Level Specific",
    detail: "Senior Leadership, Mid-Career Professionals, Freshers",
  },
] as const;

export const audienceCards = [
  {
    title: "Tech Professionals",
    body: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    title: "Non-Tech Professionals",
    body: "Adapt digitally, collaborate in tech environments.",
  },
  {
    title: "Emerging Professionals",
    body: "Develop powerful skills for rapid career growth.",
  },
  {
    title: "Senior Professionals",
    body: "Strengthen leadership, enhance strategic decisions.",
  },
] as const;

export const catSteps = [
  {
    step: 1,
    title: "Skill Gap Analysis",
    body: "Assess team skill gaps and developmental needs.",
  },
  {
    step: 2,
    title: "Customized Training Plan",
    body: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    step: 3,
    title: "Flexible Program Delivery",
    body: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
] as const;

export const faqTabs = ["About the Course", "About the Delivery", "Miscellaneous"] as const;

export type FaqTab = (typeof faqTabs)[number];

export const faqItems: Record<FaqTab, { q: string; a: string }[]> = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      q: "What domain specializations are available?",
      a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],
  "About the Delivery": [
    {
      q: "How are programs delivered?",
      a: "Delivery blends live workshops, async modules, and capstone projects—timed around your teams' calendars and compliance requirements.",
    },
    {
      q: "Can content be customized for our stack?",
      a: "Yes. We align examples, labs, and assessments with your tools, data policies, and internal frameworks.",
    },
  ],
  Miscellaneous: [
    {
      q: "How do we measure impact?",
      a: "We pair pre/post assessments, manager feedback loops, and usage analytics so L&D can report clear ROI.",
    },
    {
      q: "What support do we get after launch?",
      a: "Dedicated success partners, office hours, and refresh sessions keep momentum after the initial rollout.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    name: "Learning Partner",
    role: "Global Technology Firm",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    name: "VP, Talent",
    role: "Financial Services",
  },
  {
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    name: "Head of L&D",
    role: "Enterprise Retail",
  },
] as const;

export const partnerPlaceholders = [
  "Northwind",
  "Contoso",
  "Fabrikam",
  "Adventure",
  "Litware",
  "Wide World",
] as const;
