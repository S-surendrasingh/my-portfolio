"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/Container";
import {
  ABOUT_EDUCATION,
  ABOUT_EDUCATION_SUBJECTS,
  ABOUT_EXPERIENCE,
} from "@/lib/about-content";
import { ExperienceBulletText } from "@/components/about/ExperienceBulletText";

const ease = [0.22, 1, 0.36, 1] as const;

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const timelineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

const cardClassName =
  "group ml-10 rounded-2xl border border-purple-500/10 bg-zinc-900/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] sm:p-6";

const experienceCardClassName = `${cardClassName} mb-5`;

const nodeClassName =
  "absolute left-4 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-purple-500/50 bg-purple-950 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]";

export function AboutExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 pt-14 pb-4 sm:px-8 sm:pt-20 sm:pb-6">
      <Container>
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headerContainer}
        >
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]"
            variants={headerItem}
          >
            Experience
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            variants={headerItem}
          >
            Professional journey
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-7 text-muted"
            variants={headerItem}
          >
            Senior full-stack and AI engineering for global product teams — remote-first delivery
            with production ownership.
          </motion.p>
        </motion.div>

        <div className="relative mt-12 pb-0">
          <div
            className="absolute left-4 top-0 h-full max-h-[calc(100%-0.5rem)] w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500/40 to-transparent"
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={timelineContainer}
          >
            {ABOUT_EXPERIENCE.map((role) => (
              <motion.article
                key={`${role.company}-${role.period}`}
                className="relative"
                variants={cardVariants}
              >
                <div className={`${nodeClassName} top-6`} aria-hidden="true">
                  <Briefcase className="h-4 w-4" strokeWidth={2} />
                </div>

                <div className={experienceCardClassName}>
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-300">
                    <Calendar className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden="true" />
                    {role.period}
                    <span className="text-purple-500/50" aria-hidden="true">
                      ·
                    </span>
                    <MapPin className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden="true" />
                    {role.location}
                  </span>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-200">
                    {role.title}
                  </h3>

                  <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-purple-400">
                    <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {role.company}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {role.bullets.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-purple-400"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <ExperienceBulletText text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}

            <motion.div
              id="education"
              className="scroll-mt-28 max-w-2xl pt-8 sm:pt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={headerContainer}
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5CF6]"
                variants={headerItem}
              >
                Education
              </motion.p>
              <motion.h2
                className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                variants={headerItem}
              >
                Education
              </motion.h2>
            </motion.div>

            <motion.article
              className="relative mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
            >
              <div className={`${nodeClassName} top-6`} aria-hidden="true">
                <GraduationCap className="h-4 w-4" strokeWidth={2} />
              </div>

              <div className={cardClassName}>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-300">
                  <Calendar className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden="true" />
                  {ABOUT_EDUCATION.years}
                </span>

                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-purple-200">
                  {ABOUT_EDUCATION.degree}
                </h3>

                <p className="mb-4 flex items-center gap-2 text-sm font-medium text-purple-300">
                  <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {ABOUT_EDUCATION.institution}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {ABOUT_EDUCATION_SUBJECTS.map((subject) => (
                    <li
                      key={subject}
                      className="rounded-md border border-purple-500/20 bg-purple-900/30 px-2.5 py-1 text-[11px] text-purple-200/80"
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
