import {
  ABOUT_CORE_SKILLS,
  ABOUT_EDUCATION,
  ABOUT_EXPERIENCE,
} from "@/lib/about-content";
import {
  CONTACT_EMAIL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  siteConfig,
  UPWORK_PROFILE_URL,
} from "@/lib/site-config";

export const resumeProfile = {
  name: siteConfig.name,
  title: siteConfig.role,
  email: CONTACT_EMAIL,
  location: "India · Open to remote (global)",
  links: {
    linkedin: LINKEDIN_PROFILE_URL,
    github: GITHUB_PROFILE_URL,
    upwork: UPWORK_PROFILE_URL,
  },
  summary:
    "Senior Full-Stack & AI Engineer with 8+ years building production web applications, SaaS platforms, APIs, and AI/LLM-powered features. Experienced across Ruby on Rails, React, TypeScript, Node.js, Python (FastAPI, Django), PostgreSQL, AWS, Docker, and CI/CD. Remote-first delivery for global startups and product teams.",
};

export const resumeSkills = ABOUT_CORE_SKILLS.map((group) => ({
  title: group.title,
  tags: [...group.tags],
}));

export const resumeExperience = ABOUT_EXPERIENCE.map((role) => ({
  company: role.company,
  title: role.title,
  period: role.period,
  location: role.location,
  bullets: role.bullets.slice(0, 4),
}));

export const resumeEducation = {
  degree: ABOUT_EDUCATION.degree,
  institution: ABOUT_EDUCATION.institution,
  years: ABOUT_EDUCATION.years,
};
