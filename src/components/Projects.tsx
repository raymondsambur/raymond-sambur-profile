"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ============================================
   PROJECT DATA
   These are your actual GitHub projects.
   Update URLs and descriptions as needed.
   ============================================ */
const projects = [
  {
    title: "Automation Script Generator",
    summary:
      "An autonomous E2E testing framework that bridges manual test case management and automated execution. Leverages Generative AI to automatically generate robust Playwright test scripts directly from Notion test tickets — eliminating the manual-to-automation gap.",
    tags: ["Playwright", "Generative AI", "Notion API", "TypeScript", "Node.js"],
    sourceUrl: "https://github.com/raymondsambur/automation-script-generator",
    liveUrl: null,
    accent: "from-primary to-accent",
  },
  {
    title: "UI & API Automation — Playwright",
    summary:
      "A comprehensive test automation framework covering both UI and API layers using Playwright. Implements best practices for scalable test architecture including page object models, API request builders, and parallel execution support.",
    tags: ["Playwright", "TypeScript", "API Testing", "Page Object Model", "CI/CD"],
    sourceUrl: "https://github.com/raymondsambur/ui-api-automation-playwright",
    liveUrl: null,
    accent: "from-accent to-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-text-secondary max-w-xl mx-auto">
            Open-source tools and frameworks I&apos;ve built to push the
            boundaries of test automation.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group relative bg-surface-light rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Top gradient accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="p-8 md:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-surface border border-border hover:border-primary hover:text-primary text-text-muted transition-all duration-200"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-surface border border-border hover:border-primary hover:text-primary text-text-muted transition-all duration-200"
                      aria-label={`Source code of ${project.title}`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium text-primary/90 bg-primary/8 border border-primary/15 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View on GitHub link */}
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors group/link"
                >
                  View on GitHub
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
