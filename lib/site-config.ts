/** Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://yoursite.com). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://example.com");

// TODO: replace with a real inbox once configured.
export const CONTACT_EMAIL = "surendrar7000@gmail.com";
export const UPWORK_PROFILE_URL: string | null =
  "https://www.upwork.com/freelancers/surendras36";
export const GITHUB_PROFILE_URL: string | null = "https://github.com/S-surendrasingh";
export const LINKEDIN_PROFILE_URL: string | null =
  "https://www.linkedin.com/in/surendraa-s-986715428/";
/** Served from `public/resume.pdf` (copied from `resume/` on build). */
export const RESUME_PDF_URL = "/resume.pdf";
export const RESUME_DOWNLOAD_FILENAME =
  "Surendra_Rajput_Senior_Full_Stack_Engineer_Resume.pdf";

export const siteConfig = {
  name: "Surendra S.",
  role: "Senior Full-Stack & AI Engineer",
  tagline:
    "I'm Surendra, a Senior Full-Stack & AI Engineer with 8+ years of experience building production web applications, backend systems, SaaS products and AI-powered solutions.",
  description:
    "Portfolio of Surendra S., a Senior Full-Stack & AI Engineer with 8+ years of experience across Python, FastAPI, Ruby on Rails, React, PostgreSQL, AWS and AI/LLM integrations.",
  nav: [
    { label: "About", href: "/about#about", sectionId: "about" },
    { label: "Projects", href: "/about#projects", sectionId: "projects" },
    { label: "Contact", href: "/about#contact", sectionId: "contact" },
  ],
  socials: {
    github: GITHUB_PROFILE_URL,
    linkedin: LINKEDIN_PROFILE_URL,
    upwork: UPWORK_PROFILE_URL,
  },
} as const;
