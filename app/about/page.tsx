import type { Metadata } from "next";
import { aboutTopBandClassName } from "@/components/about/aboutStyles";
import { AboutContactSection } from "@/components/about/AboutContactSection";
import { AboutCoreSkills } from "@/components/about/AboutCoreSkills";
import { AboutExperienceTimeline } from "@/components/about/AboutExperienceTimeline";
import { AboutHeroLeftColumn } from "@/components/about/AboutHeroLeftColumn";
import { AboutHeroPortrait } from "@/components/about/AboutHeroPortrait";
import { WhyClientsHire } from "@/components/about/WhyClientsHire";
import { EngineeringApproach } from "@/components/EngineeringApproach";
import { FeaturedShowcase } from "@/components/home/FeaturedShowcase";
import { getHeroPortraitSrc } from "@/lib/portrait";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "8+ years of professional software development across Ruby on Rails, React, TypeScript, Node.js, Python, AI/LLM integrations, and DevOps — remote delivery for global startups and product teams.",
};

export default function AboutPage() {
  const portraitSrc = getHeroPortraitSrc();

  return (
    <>
      <div id="about" className="scroll-mt-28">
        <div className={aboutTopBandClassName}>
          <section
            className="relative flex flex-col justify-start overflow-x-hidden px-4 pt-2 pb-10 sm:px-8 sm:pt-3 sm:pb-12 lg:min-h-[calc(100vh-4.75rem)] lg:pt-4 lg:pb-8 lg:overflow-hidden"
          >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
              <AboutHeroLeftColumn className="order-last lg:order-none lg:col-span-7" />

              <div
                className="relative order-first mx-auto flex h-full max-h-[300px] w-full max-w-xs items-end justify-center sm:max-h-[340px] sm:max-w-sm lg:order-none lg:col-span-5 lg:max-h-[520px] lg:max-w-none lg:items-center"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.22),transparent_72%)]"
                  aria-hidden="true"
                />
                <AboutHeroPortrait
                  src={portraitSrc}
                  alt={`Portrait of ${siteConfig.name}, ${siteConfig.role}`}
                />
              </div>
            </div>
          </section>

          <AboutCoreSkills className="pt-2 pb-10 sm:pt-4 sm:pb-14" />
        </div>

        <AboutExperienceTimeline />
        <EngineeringApproach />
        <WhyClientsHire />
      </div>

      <FeaturedShowcase />
      <AboutContactSection />
    </>
  );
}
