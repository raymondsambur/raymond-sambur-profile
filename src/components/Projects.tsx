"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "Automation Script Generator",
    summary:
      "An autonomous E2E testing framework that bridges manual test case management and automated execution. Leverages Generative AI to automatically generate robust Playwright test scripts directly from Notion test tickets — eliminating the manual-to-automation gap.",
    tags: ["Playwright", "Generative AI", "Notion API", "TypeScript", "Node.js"],
    sourceUrl: "https://github.com/raymondsambur/automation-script-generator",
    liveUrl: null,
    accent: "from-indigo-500 to-cyan-500",
  },
  {
    title: "UI & API Automation — Playwright",
    summary:
      "A comprehensive test automation framework covering both UI and API layers using Playwright. Implements best practices for scalable test architecture including page object models, API request builders, and parallel execution support.",
    tags: ["Playwright", "TypeScript", "API Testing", "Page Object Model", "CI/CD"],
    sourceUrl: "https://github.com/raymondsambur/ui-api-automation-playwright",
    liveUrl: null,
    accent: "from-cyan-500 to-indigo-500",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Open-source tools and frameworks I&apos;ve built to push the
            boundaries of test automation.
          </p>
        </motion.div>

        {/* Animated Card Stack */}
        <div className="relative">
          {/* Stacked cards preview (background cards) */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Background card indicators */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[90%] h-full rounded-2xl border border-slate-800 bg-slate-900/50 -z-10" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[80%] h-full rounded-2xl border border-slate-800/50 bg-slate-900/30 -z-20" />

              {/* Active card */}
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    bounce: 0,
                  }}
                  className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden"
                >
                  {/* Top gradient accent */}
                  <div
                    className={`h-1 bg-gradient-to-r ${projects[activeIndex].accent}`}
                  />

                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                        {projects[activeIndex].title}
                      </h3>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        {projects[activeIndex].liveUrl && (
                          <a
                            href={projects[activeIndex].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 text-slate-400 transition-all duration-200"
                            aria-label="Live demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        <a
                          href={projects[activeIndex].sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 text-slate-400 transition-all duration-200"
                          aria-label="Source code"
                        >
                          <GithubIcon size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">
                      {projects[activeIndex].summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[activeIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View link */}
                    <a
                      href={projects[activeIndex].sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-400 transition-colors group/link"
                    >
                      View on GitHub
                      <ArrowUpRight
                        size={14}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:border-indigo-500/50 hover:text-indigo-400 text-slate-400 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-indigo-500 w-6"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:border-indigo-500/50 hover:text-indigo-400 text-slate-400 transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
