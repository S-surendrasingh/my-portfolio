export const ABOUT_HERO_STATS = [
  { value: "8+ Years", label: "Software Development Experience" },
  { value: "Global Remote", label: "Collaborating Across Timezones" },
  { value: "Full-Stack & AI", label: "Production Architectures" },
] as const;

export const ABOUT_HERO_FOCUS_BADGES = [
  "Ruby on Rails",
  "React.js",
  "TypeScript",
  "Node.js",
  "Python / FastAPI",
  "AI / LLMs",
  "DevOps",
] as const;

export type AboutTrustAccent = "purple" | "emerald" | "indigo" | "amber";

export type AboutTrustItem = {
  id: string;
  title: string;
  lead: string;
  body: string;
  detail: string;
  accent: AboutTrustAccent;
};

export const ABOUT_TRUST_ITEMS: AboutTrustItem[] = [
  {
    id: "remote",
    title: "Remote & global delivery",
    lead: "8+ years",
    body:
      "of remote experience shipping SaaS, APIs, and AI-powered products for startups and product teams worldwide.",
    detail:
      "Strong {{async communication}}, clear written updates, and reliable overlap with {{US / EU time zones}} when needed.",
    accent: "purple",
  },
  {
    id: "quality",
    title: "Quality & reliability",
    lead: "Production-grade",
    body:
      "security practices, automated testing, and observability built into every engagement—not bolted on at the end.",
    detail:
      "{{Rails tests}}, {{API validation}}, linting, and {{production troubleshooting}} to keep releases stable.",
    accent: "emerald",
  },
  {
    id: "execution",
    title: "Full-stack ownership",
    lead: "End-to-end execution",
    body:
      "from database schema and backend APIs to React frontends, integrations, and deployment-ready delivery.",
    detail:
      "One senior engineer across the stack — move faster with {{fewer handoffs}} and {{less rework}}.",
    accent: "indigo",
  },
  {
    id: "delivery",
    title: "Predictable shipping",
    lead: "Agile delivery",
    body:
      "with clear milestones, regular demos, and transparent progress—friendly to Upwork and long-term contracts.",
    detail:
      "Scope in {{shippable increments}} — always know {{what’s done}} and {{what’s next}}.",
    accent: "amber",
  },
];

export const ABOUT_CORE_SKILLS = [
  {
    title: "Full-Stack Engineering",
    tags: ["Ruby on Rails", "React", "TypeScript", "Node.js"],
  },
  {
    title: "AI & LLM Integrations",
    tags: ["Prompt Engineering", "Generative AI", "LLM APIs", "RAG"],
  },
  {
    title: "Python Ecosystem",
    tags: ["FastAPI", "Flask", "Django", "Microservices"],
  },
  {
    title: "DevOps & Cloud",
    tags: ["Docker", "CI/CD", "AWS", "Production Ops"],
  },
  {
    title: "Backend & Database Architecture",
    tags: ["REST APIs", "PostgreSQL", "Scalable Systems"],
  },
  {
    title: "Technical Leadership & Clean Code",
    tags: ["Code Reviews", "Mentoring", "Architecture"],
  },
] as const;

export type AboutExperienceRole = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export const ABOUT_EXPERIENCE: AboutExperienceRole[] = [
  {
    company: "MindNerves Technologies",
    title: "Senior Software Engineer",
    period: "2024 – 2026",
    location: "Remote",
    bullets: [
      "Owned full-stack delivery of production web applications and APIs using Ruby on Rails, React, Python, and PostgreSQL in a fast-moving product environment.",
      "Integrated AI/LLM capabilities into live application workflows, supporting prompt-based features and generative AI use cases.",
      "Built and maintained reliable backend services, REST APIs, and background processing for production systems.",
      "Improved application quality through automated testing, API testing, debugging, and production troubleshooting.",
      "Collaborated with cross-functional teams to translate requirements into shippable features and maintain stable releases.",
      "Supported CI/CD, Docker-based workflows, and ongoing production maintenance for business-critical applications.",
    ],
  },
  {
    company: "Builder.ai",
    title: "Senior Software Engineer",
    period: "2020 – 2024",
    location: "Remote",
    bullets: [
      "Delivered full-stack SaaS and product engineering using Ruby on Rails, React, Python, Node.js, and REST APIs across complex business domains.",
      "Designed and implemented backend systems, API integrations, and application features for production customer-facing products.",
      "Worked with AI/LLM and modern software technologies to extend product capabilities and improve user-facing workflows.",
      "Reviewed system behavior, identified defects, and resolved production issues through root-cause analysis and quality-focused debugging.",
      "Partnered with development teams and stakeholders to clarify requirements and ship maintainable, scalable application code.",
      "Contributed to testing, validation, deployment readiness, and long-term maintainability of production platforms.",
    ],
  },
  {
    company: "Kangaroo Software",
    title: "Software Engineer",
    period: "2018 – 2020",
    location: "India",
    bullets: [
      "Built web applications and REST APIs with focus on data handling, validation, and dependable backend behavior.",
      "Developed core product features and backend integrations while working within defined functional requirements.",
      "Performed functional testing, debugging, and defect resolution to improve application reliability.",
      "Supported API development and data validation workflows for production-facing software systems.",
      "Established strong foundations in software delivery, requirement analysis, and collaborative engineering practices.",
    ],
  },
];

export const ABOUT_EDUCATION = {
  degree: "B.Tech in Computer Science / Engineering",
  institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, MP, India",
  years: "2014 – 2018",
};

export const ABOUT_EDUCATION_SUBJECTS = [
  "CS Fundamentals",
  "Algorithms",
  "Database Systems",
  "System Design",
] as const;
