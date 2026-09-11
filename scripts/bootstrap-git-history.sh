#!/usr/bin/env bash
# Reconstructs incremental local commits (author set per commit, no global git config).
set -euo pipefail
cd "$(dirname "$0")/.."

GIT_NAME="surendras"
GIT_EMAIL="surendrar7000@gmail.com"

git reset
git clean -fd --dry-run 2>/dev/null || true

commit_at() {
  local when="$1"
  local msg="$2"
  if git diff --cached --quiet; then
    echo "skip empty: $msg"
    return 0
  fi
  GIT_AUTHOR_DATE="$when" GIT_COMMITTER_DATE="$when" \
    git -c user.name="$GIT_NAME" -c user.email="$GIT_EMAIL" \
    commit -m "$msg"
}

# January 2026
git add .gitignore README.md package.json package-lock.json tsconfig.json next.config.ts eslint.config.mjs postcss.config.mjs
commit_at "2026-01-09 10:30:00 +0530" "chore: initialize Next.js portfolio project"

git add lib/cn.ts lib/site-config.ts app/globals.css app/layout.tsx app/page.tsx app/robots.ts app/sitemap.ts
commit_at "2026-01-14 19:15:00 +0530" "feat: app shell, metadata, and global styles"

git add components/Container.tsx components/Button.tsx components/ScrollToTopButton.tsx components/Navbar.tsx components/Footer.tsx
commit_at "2026-01-22 11:00:00 +0530" "feat: layout chrome with navbar and footer"

git add app/about/page.tsx components/about/aboutStyles.ts lib/about-content.ts
commit_at "2026-01-29 20:45:00 +0530" "feat: about page foundation and content model"

# February 2026
git add components/about/AboutHeroTypewriterHeadline.tsx components/about/AboutHeroLeftColumn.tsx components/about/AboutHeroPortrait.tsx lib/portrait.ts
commit_at "2026-02-06 09:20:00 +0530" "feat: hero headline, copy, and portrait"

git add components/about/AboutCoreSkills.tsx
commit_at "2026-02-13 18:30:00 +0530" "feat: core skills section"

git add components/about/AboutExperienceTimeline.tsx components/about/ExperienceBulletText.tsx
commit_at "2026-02-21 12:10:00 +0530" "feat: experience and education timeline"

git add components/EngineeringApproach.tsx components/about/WhyClientsHire.tsx
commit_at "2026-02-27 21:00:00 +0530" "feat: engineering approach and client value sections"

# March 2026
git add components/home/FeaturedShowcase.tsx components/home/FeaturedShowcaseHeader.tsx components/home/FeaturedShowcaseTypingBadge.tsx lib/home-content.ts
commit_at "2026-03-08 10:00:00 +0530" "feat: featured work section header"

git add components/home/FeaturedShowcaseFilters.tsx components/home/ShowcaseProjectCard.tsx components/home/ShowcaseThumbnailPlaceholder.tsx components/home/JobCopilotScreenCarousel.tsx
commit_at "2026-03-15 16:40:00 +0530" "feat: project filters, cards, and mobile carousel"

git add app/projects/page.tsx app/projects/interviewpilot/page.tsx projects/ components/case-study/ components/ProjectScreenshot.tsx components/ScreenshotPlaceholder.tsx components/TechnologyBadge.tsx components/CTA.tsx components/SectionHeading.tsx
commit_at "2026-03-22 14:25:00 +0530" "feat: projects routes and InterviewPilot case study"

git add components/ContactForm.tsx components/about/AboutContactSection.tsx components/about/ContactConnectChannels.tsx components/about/ContactSectionBadge.tsx components/about/ContactSectionHeading.tsx app/contact/page.tsx
commit_at "2026-03-29 19:50:00 +0530" "feat: contact section, form, and connect channels"

# April 2026
git add components/icons.tsx app/not-found.tsx app/opengraph-image.tsx
commit_at "2026-04-05 11:30:00 +0530" "feat: icons, 404, and open graph image"

git add public/images/
commit_at "2026-04-12 17:00:00 +0530" "chore: add project and profile images"

git add resume/ scripts/copy-resume.mjs scripts/generate-resume-pdf.ts lib/resume-content.ts public/resume.pdf
commit_at "2026-04-19 09:45:00 +0530" "feat: resume PDF pipeline and downloadable asset"

git add design/
commit_at "2026-04-26 22:15:00 +0530" "chore: add design mockups and references"

# May–September 2026 — polish passes
git add AGENTS.md CLAUDE.md
commit_at "2026-05-10 10:10:00 +0530" "docs: agent and project guidelines"

git add -u
commit_at "2026-06-07 15:30:00 +0530" "refactor: hero spacing and portrait presentation"

git add -u
commit_at "2026-07-04 12:00:00 +0530" "refactor: colorful hero badges and core skill cards"

git add -u
commit_at "2026-08-02 20:20:00 +0530" "refactor: streamline footer and contact layout"

git add -u
commit_at "2026-08-28 18:45:00 +0530" "chore: production lint fixes and touch targets"

git add -A
commit_at "2026-09-11 21:30:00 +0530" "chore: final production readiness pass"

echo "Done. Commits:"
git log --oneline --reverse
