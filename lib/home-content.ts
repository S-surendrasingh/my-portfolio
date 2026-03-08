export type ShowcaseCategory = "ai" | "fullstack" | "desktop";

export type ShowcaseCarouselScreen = {
  id: string;
  title: string;
  subtitle: string;
};

export type HomeShowcaseProject = {
  id: string;
  name: string;
  subtitle: string;
  categories: ShowcaseCategory[];
  impactBadge: string;
  badges: string[];
  highlights: string[];
  caseStudyHref: string | null;
  demoHref: string | null;
  thumbnailSrc: string | null;
  thumbnailAlt: string;
  carouselScreens?: ShowcaseCarouselScreen[];
};

export const SHOWCASE_FILTER_TABS = [
  { id: "all" as const, label: "All Work" },
  { id: "ai" as const, label: "AI & LLM Systems" },
  { id: "fullstack" as const, label: "Full-Stack & Cloud" },
  { id: "desktop" as const, label: "Desktop Apps" },
];

export type ShowcaseFilterId = (typeof SHOWCASE_FILTER_TABS)[number]["id"];

export const HOME_SHOWCASE_PROJECTS: HomeShowcaseProject[] = [
  {
    id: "job-copilot",
    name: "Job Copilot AI",
    subtitle: "Autonomous AI Job Application Assistant",
    categories: ["ai", "fullstack"],
    impactBadge: "⚡ 98% Automation Rate",
    badges: ["Node.js", "React.js", "TypeScript", "AI/LLM", "Microservices"],
    highlights: [
      "Architected microservices-based AI engine for automated job matching and application workflows.",
      "Designed scalable Node.js + TypeScript APIs paired with a high-performance React dashboard.",
    ],
    caseStudyHref: null,
    demoHref: null,
    thumbnailSrc: null,
    thumbnailAlt: "Job Copilot AI product preview",
    carouselScreens: [
      { id: "dashboard", title: "Command Dashboard", subtitle: "Pipeline health & match scores at a glance" },
      { id: "matching", title: "AI Job Matching", subtitle: "LLM-ranked roles against your profile" },
      { id: "applications", title: "Auto Applications", subtitle: "Workflow automation with human review gates" },
      { id: "analytics", title: "Outcome Analytics", subtitle: "Response rates and funnel conversion" },
      { id: "settings", title: "Integrations", subtitle: "Microservices, queues & API controls" },
    ],
  },
  {
    id: "interviewstudio",
    name: "InterviewStudio",
    subtitle: "AI-Powered Desktop & Web Interview Prep Suite",
    categories: ["ai", "fullstack", "desktop"],
    impactBadge: "🚀 Enterprise Scale",
    badges: ["Ruby on Rails", "React", "Electron.js", "AI/LLM"],
    highlights: [
      "Built cross-platform (Web + Electron Desktop) AI studio for real-time interview evaluation and scoring.",
      "Integrated Rails backend with context-aware LLM pipelines to analyze resume, job description, and live feedback.",
    ],
    caseStudyHref: "/projects/interviewpilot",
    demoHref: "/projects/interviewpilot#architecture",
    thumbnailSrc: "/images/dashboard.png",
    thumbnailAlt: "InterviewStudio dashboard with interview analytics and performance charts",
  },
  {
    id: "voice-conversion",
    name: "Realtime Voice Conversion AI",
    subtitle: "High-Throughput RAG & Audio Processing Engine",
    categories: ["ai", "fullstack"],
    impactBadge: "⚡ Low-Latency RAG",
    badges: ["Python", "LLM", "RAG", "TypeScript", "AI"],
    highlights: [
      "Engineered low-latency voice conversion pipeline using Python, RAG architectures, and custom LLM workflows.",
      "Implemented robust TypeScript frontend and microservices for seamless sample storage, retrieval, and transformation.",
    ],
    caseStudyHref: null,
    demoHref: null,
    thumbnailSrc: null,
    thumbnailAlt: "Realtime Voice Conversion AI architecture preview",
  },
];
