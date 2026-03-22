import type { CaseStudy, Project } from "./types";

// TODO: replace with the real deployed URL when available.
export const INTERVIEWPILOT_LIVE_DEMO_URL: string | null = null;
// TODO: replace with the real repository URL when available (or leave null if private).
export const INTERVIEWPILOT_GITHUB_URL: string | null = null;
// TODO: replace with a real hosted PDF export of the case study when available.
export const INTERVIEWPILOT_CASE_STUDY_PDF_URL: string | null = null;

// Short, homepage-facing summary. Keep this concise — the fuller product
// scope lives in the case study's Overview section below.
export const INTERVIEWPILOT_DESCRIPTION =
  "AI-powered hybrid interview assistant and practice platform with a Rails + React web application and an Electron desktop client.";

export const interviewPilotProject: Project = {
  slug: "interviewpilot",
  name: "InterviewPilot AI",
  status: "featured",
  summary: INTERVIEWPILOT_DESCRIPTION,
  stack: ["Rails 8", "React", "Electron", "PostgreSQL", "AI"],
  categories: ["AI Products", "SaaS", "Web Applications"],
  links: {
    liveDemo: INTERVIEWPILOT_LIVE_DEMO_URL,
    github: INTERVIEWPILOT_GITHUB_URL,
    caseStudy: "/projects/interviewpilot",
    caseStudyPdf: INTERVIEWPILOT_CASE_STUDY_PDF_URL,
  },
  thumbnail: {
    src: "/images/dashboard.png",
    alt: "InterviewPilot AI dashboard showing live interview stats, a performance chart, recent interviews list, score distribution and top skills performance",
    aspect: "aspect-[3/2]",
  },
};

// Sections left as `null` are intentionally unpopulated placeholders — fill
// in with real project detail rather than invented specifics.
export const interviewPilotCaseStudy: CaseStudy = {
  project: interviewPilotProject,
  overview: [
    "InterviewPilot AI is an AI-powered hybrid interview assistant and practice platform with two main surfaces: a Rails + React web application — registration, dashboard, interview history, practice mode, summaries and reports — and an Electron desktop client for live interview capture with a candidate-side overlay and session controls.",
    "The product has progressed beyond its initial POC into an active product implementation, with core Rails APIs, React screens, Electron live-assistant workflows, AI services and Solid Queue finalization jobs implemented.",
  ],
  problem: {
    heading: "The problem",
    body: [
      "Candidates can struggle with unexpected questions during live interviews and often lack an effective way to practice, review their performance and identify areas for improvement.",
    ],
  },
  myRole: {
    heading: "My Role — Backend Tech Lead",
    body: [
      "I served as the main Backend Tech Lead for InterviewPilot AI, leading the backend architecture and technical direction of the product. I designed the application architecture and backend boundaries around a shared Rails platform supporting both the React web experience and Electron desktop client.",
      "Alongside backend leadership, I remained hands-on with the Electron desktop application, particularly around integrating the AI-powered live interview workflows and connecting the desktop experience with the shared backend services.",
      "My responsibilities included architecture decisions, backend technical leadership, defining system boundaries, supporting AI integration, and contributing directly to the Electron implementation.",
    ],
  },
  solution: {
    heading: "The solution",
    body: [
      "InterviewPilot combines a Rails + React web application with an Electron desktop assistant to support candidates before, during and after interviews. The desktop experience provides live answer guidance, while the web application supports practice, interview history, summaries, scores, reports and performance review.",
      "AI workflows use relevant user/session context to generate guidance and feedback.",
    ],
  },
  keyFeatures: [
    "Live Interview Assistance — Electron-based live interview capture, answer guidance and session controls.",
    "Contextual AI Guidance — uses interview/session context and relevant user documents to support answer generation.",
    "Practice Mode — AI-assisted interview practice and review workflows.",
    "Interview Summaries — post-interview summary generation.",
    "Performance Feedback — scores and feedback for reviewing interview performance.",
    "Interview History — persistent session/transcript history available through the web application.",
    "Resume & Job Description Context — uploaded documents can provide relevant context for AI workflows.",
  ],
  architecture: {
    heading: "Architecture",
    body: [
      "InterviewPilot AI is one Rails 8 application rather than a split frontend/backend system — there is no separate frontend repository. React 19 lives inside that same Rails app under app/javascript, and Electron is isolated under electron/ as the desktop client. Rails remains the only HTTP server, and both the web and desktop surfaces call the same versioned Rails APIs instead of duplicating business logic.",
      "PostgreSQL is the system of record for users, sessions, transcripts, summaries and scores. Solid Queue runs through ActiveJob for background work such as live-interview finalization, keeping longer-running jobs off the request/response cycle. Uploaded documents are handled through Active Storage, currently configured with local disk storage — production object storage still needs to be configured for deployment.",
    ],
  },
  engineeringHighlights: [
    "Shared Application Architecture — Rails provides shared backend workflows for both the web and desktop experiences, so both clients reuse one backend instead of maintaining separate systems — architectural separation without unnecessary microservices.",
    "Clear Responsibility Boundaries — Electron owns desktop-specific behavior such as live capture and the candidate-side overlay; Rails owns persistent business workflows and data.",
    "Context-Aware AI Workflows — resume, job-description, transcript and session context inform AI-generated guidance and feedback.",
    "Background Finalization — Solid Queue supports asynchronous interview-finalization and other application background work.",
    "Test-Oriented Development — the engineering baseline includes Rails tests, frontend tests, linting and security scanning.",
  ],
  aiImplementation: {
    heading: "AI implementation",
    body: [
      "AI-generated guidance draws on resume, job description, transcript and session/interview context to produce interview answer suggestions, post-interview summaries, scores, feedback, practice questions and review insights.",
      "AI provider calls run through InterviewPilot::AiClient, a small Net::HTTP wrapper around the OpenAI or Groq chat-completions endpoints, and execute synchronously within the request/response cycle rather than through a background job. Each AI-backed evaluator asks the model for a strict, parseable response format and falls back to a deterministic, heuristic score whenever no provider key is configured, the response doesn't parse, or the request fails — so the product stays fully functional without depending on a live AI key in development or testing.",
    ],
  },
  techStack: [
    { category: "Backend", items: ["Ruby 3.3.9", "Rails 8.0.0.1"] },
    { category: "Frontend", items: ["React 19"] },
    { category: "Desktop", items: ["Electron"] },
    { category: "Database", items: ["PostgreSQL"] },
    { category: "Background Processing", items: ["Solid Queue", "ActiveJob"] },
    { category: "File Handling", items: ["Active Storage"] },
    { category: "AI Integration", items: ["OpenAI", "Groq", "Chat Completions API"] },
  ],
  screenshots: [
    {
      src: "/images/dashboard.png",
      alt: "InterviewPilot AI dashboard showing live interview stats, a performance chart, recent interviews list, score distribution and top skills performance",
      caption: "Dashboard — interview performance overview, recent sessions and skill breakdown.",
      aspect: "aspect-[3/2]",
      emphasis: "primary",
    },
    {
      src: "/images/practice.png",
      alt: "InterviewPilot AI practice mode screen showing the practice flow steps and a form to start a new practice session with resume and job description uploads",
      caption:
        "Practice mode — generates AI practice questions from an uploaded resume and job description, with no scores or history saved.",
      aspect: "aspect-[3/2]",
    },
    {
      src: "/images/interview-history.png",
      alt: "InterviewPilot AI Live Interviews screen showing a table of captured interview sessions with role, date, duration, score and status",
      caption: "Live Interviews — a history of captured sessions with duration, score and status.",
      aspect: "aspect-[3/2]",
    },
    {
      src: "/images/desktop.png",
      alt: "InterviewPilot AI desktop app download page with Windows and macOS installation instructions",
      caption:
        "Desktop app setup — downloading and connecting the Electron-based desktop client for live capture.",
      aspect: "aspect-[2048/1158]",
    },
  ],
  outcome: [
    "Help candidates feel more prepared during interviews",
    "Support more effective responses to unexpected questions",
    "Provide actionable post-interview feedback",
    "Improve interview preparation through AI-assisted practice and review",
  ],
};
