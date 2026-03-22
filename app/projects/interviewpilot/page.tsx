import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ContentPlaceholder } from "@/components/case-study/ContentPlaceholder";
import { Container } from "@/components/Container";
import { CTA, CTASection } from "@/components/CTA";
import { ProjectScreenshot } from "@/components/ProjectScreenshot";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { interviewPilotCaseStudy } from "@/projects";

export const metadata: Metadata = {
  title: "InterviewPilot AI — Case Study",
  description: interviewPilotCaseStudy.project.summary,
};

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "solution", label: "Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "key-features", label: "Key Features" },
  { id: "engineering-highlights", label: "Engineering Highlights" },
  { id: "ai-implementation", label: "AI Implementation" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "screenshots", label: "Screenshots" },
  { id: "outcome", label: "Expected Outcomes" },
];

const PLACEHOLDER_LABEL = "Detailed project information will be added here.";

function TextSection({ body }: { body: string[] | null }) {
  if (!body) return <ContentPlaceholder label={PLACEHOLDER_LABEL} />;
  return (
    <div className="flex flex-col gap-4">
      {body.map((paragraph) => (
        <p key={paragraph} className="text-base leading-7 text-muted">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ListSection({ items }: { items: string[] | null }) {
  if (!items) return <ContentPlaceholder label={PLACEHOLDER_LABEL} />;
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="text-base leading-7 text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function InterviewPilotPage() {
  const {
    project,
    overview,
    problem,
    myRole,
    solution,
    architecture,
    keyFeatures,
    engineeringHighlights,
    aiImplementation,
    techStack,
    screenshots,
    outcome,
  } = interviewPilotCaseStudy;

  const primaryScreenshot = screenshots.find((shot) => shot.emphasis === "primary");
  const secondaryScreenshots = screenshots.filter((shot) => shot.emphasis !== "primary");

  return (
    <>
      <Container className="py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <span>→</span>
          <span className="text-foreground">{project.name}</span>
        </nav>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechnologyBadge key={tech}>{tech}</TechnologyBadge>
          ))}
        </div>

        <div className="mt-10">
          <ProjectScreenshot
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            aspect={project.thumbnail.aspect}
            priority
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={project.links.liveDemo} external arrow="external">
            Live Demo
          </Button>
          <Button href={project.links.github} external variant="secondary" arrow="external">
            GitHub Repository
          </Button>
          <Button href={project.links.caseStudyPdf} external variant="secondary" arrow="external">
            Case Study PDF
          </Button>
        </div>
      </Container>

      <Container className="grid min-w-0 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-24 lg:h-fit">
          <CaseStudyNav items={NAV_ITEMS} />
        </div>

        <div className="min-w-0">
          <CaseStudySection id="overview" heading="Overview">
            <TextSection body={overview} />
          </CaseStudySection>

          <CaseStudySection id="problem" heading={problem.heading}>
            <TextSection body={problem.body} />
          </CaseStudySection>

          <CaseStudySection id="my-role" heading={myRole.heading}>
            <TextSection body={myRole.body} />
          </CaseStudySection>

          <CaseStudySection id="solution" heading={solution.heading}>
            <TextSection body={solution.body} />
          </CaseStudySection>

          <CaseStudySection id="architecture" heading={architecture.heading}>
            <TextSection body={architecture.body} />
          </CaseStudySection>

          <CaseStudySection id="key-features" heading="Key Features">
            <ListSection items={keyFeatures} />
          </CaseStudySection>

          <CaseStudySection id="engineering-highlights" heading="Engineering Highlights">
            <ListSection items={engineeringHighlights} />
          </CaseStudySection>

          <CaseStudySection id="ai-implementation" heading={aiImplementation.heading}>
            <TextSection body={aiImplementation.body} />
          </CaseStudySection>

          <CaseStudySection id="tech-stack" heading="Tech Stack">
            <div className="grid gap-6 sm:grid-cols-3">
              {techStack.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium text-foreground">{group.category}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechnologyBadge key={item}>{item}</TechnologyBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection id="screenshots" heading="Screenshots">
            <div className="flex flex-col gap-6">
              {primaryScreenshot && (
                <figure>
                  <ProjectScreenshot
                    src={primaryScreenshot.src}
                    alt={primaryScreenshot.alt}
                    aspect={primaryScreenshot.aspect}
                    sizes="(min-width: 1024px) 900px, 100vw"
                  />
                  <figcaption className="mt-3 text-sm text-muted">
                    {primaryScreenshot.caption}
                  </figcaption>
                </figure>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                {secondaryScreenshots.map((shot) => (
                  <figure key={shot.alt}>
                    <ProjectScreenshot
                      src={shot.src}
                      alt={shot.alt}
                      aspect={shot.aspect}
                      sizes="(min-width: 1024px) 440px, 100vw"
                    />
                    <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection id="outcome" heading="Expected Outcomes">
            <ListSection items={outcome} />
          </CaseStudySection>
        </div>
      </Container>

      <CTASection>
        <CTA
          title="Have a similar product in mind?"
          description="I build full-stack, AI-powered platforms like this one — from architecture to production."
          actions={
            <Button href="/contact" size="lg" arrow="right">
              Contact Me
            </Button>
          }
        />
      </CTASection>
    </>
  );
}
