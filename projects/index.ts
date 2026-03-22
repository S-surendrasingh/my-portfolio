import { interviewPilotProject } from "./interviewpilot";
import type { Project } from "./types";

// Only real, published projects are listed here. The `Project` type still
// supports a "planned" status for a real project whose case study isn't
// ready yet — add it here when that's the case. Don't add placeholder
// entries just to fill space.
export const projects: Project[] = [interviewPilotProject];

export { interviewPilotProject, interviewPilotCaseStudy } from "./interviewpilot";
export type { Project, ProjectStatus, ProjectLinks, CaseStudy } from "./types";
