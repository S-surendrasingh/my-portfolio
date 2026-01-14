import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { projects } from "@/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/about", "/projects", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/about" ? 1 : 0.7,
  }));

  const projectRoutes = projects
    .filter((project) => project.links.caseStudy)
    .map((project) => ({
      url: `${SITE_URL}${project.links.caseStudy}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...projectRoutes];
}
