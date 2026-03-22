export type ProjectStatus = "featured" | "planned";

export type ProjectLinks = {
  liveDemo: string | null;
  github: string | null;
  caseStudy: string | null;
  caseStudyPdf: string | null;
};

export type ProjectThumbnail = {
  src: string | null;
  alt: string;
  aspect: string;
};

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  summary: string;
  stack: string[];
  categories: string[];
  links: ProjectLinks;
  thumbnail: ProjectThumbnail;
};

export type CaseStudySection = {
  heading: string;
  body: string[] | null;
};

export type TechStackGroup = {
  category: string;
  items: string[];
};

export type CaseStudyScreenshot = {
  src: string | null;
  alt: string;
  caption: string;
  aspect: string;
  emphasis?: "primary" | "secondary";
};

export type CaseStudy = {
  project: Project;
  overview: string[];
  problem: CaseStudySection;
  myRole: CaseStudySection;
  solution: CaseStudySection;
  architecture: CaseStudySection;
  keyFeatures: string[] | null;
  engineeringHighlights: string[] | null;
  aiImplementation: CaseStudySection;
  techStack: TechStackGroup[];
  screenshots: CaseStudyScreenshot[];
  outcome: string[] | null;
};
