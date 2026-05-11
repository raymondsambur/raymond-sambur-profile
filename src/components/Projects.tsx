"use client";

import { useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface ProjectCard {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  sourceUrl: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "Automation Script Generator",
    summary:
      "An autonomous E2E testing framework that bridges manual test case management and automated execution. Leverages Generative AI to automatically generate robust Playwright test scripts directly from Notion test tickets.",
    tags: ["Playwright", "Generative AI", "Notion API", "TypeScript", "Node.js"],
    sourceUrl: "https://github.com/raymondsambur/automation-script-generator",
  },
  {
    id: 2,
    title: "UI & API Automation — Playwright",
    summary:
      "A comprehensive test automation framework covering both UI and API layers using Playwright. Implements best practices for scalable test architecture including page object models, API request builders, and parallel execution.",
    tags: ["Playwright", "TypeScript", "API Testing", "Page Object Model", "CI/CD"],
    sourceUrl: "https://github.com/raymondsambur/ui-api-automation-playwright",
  },
];

export default function Projects() {
  const [cards, setCards] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycleCards = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCards((prev) => [...prev.slice(1), prev[0]]);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.y) > 50 || Math.abs(info.offset.x) > 50) {
      cycleCards();
    }
  };

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

        {/* Card Stack */}
        <div className="relative flex justify-center items-center">
          <div className="relative h-[400px] sm:h-[360px] w-full max-w-2xl">
            <AnimatePresence>
              {cards.map((project, index) => {
                const isTop = index === 0;
                const stackOffset = index * -12;
                const stackScale = 1 - index * 0.04;
                const stackOpacity = 1 - index * 0.3;

                return (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0 w-full cursor-grab active:cursor-grabbing"
                    style={{ zIndex: cards.length - index }}
                    initial={false}
                    animate={{
                      y: stackOffset,
                      scale: stackScale,
                      opacity: stackOpacity,
                    }}
                    exit={{
                      y: 320,
                      opacity: 0,
                      scale: 0.9,
                      rotate: -5,
                      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                    drag={isTop ? true : false}
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    whileDrag={{ scale: 1.02, rotate: 2 }}
                  >
                    <div className="h-full bg-slate-900 rounded-2xl border border-slate-800 shadow-xl shadow-black/20 overflow-hidden">
                      {/* Gradient top bar */}
                      <div className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500" />

                      <div className="p-8 md:p-10 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                            {project.title}
                          </h3>
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 text-slate-400 transition-all duration-200 shrink-0 ml-4"
                            aria-label="Source code"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GithubIcon size={18} />
                          </a>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                          {project.summary}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tags.map((tag) => (
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
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-400 transition-colors group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View on GitHub
                          <ArrowUpRight
                            size={14}
                            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                          />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-3 mt-8">
          <button
            onClick={cycleCards}
            disabled={isAnimating}
            className="flex h-10 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 px-6 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-indigo-300 hover:border-indigo-500/30 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M9.5 18L15.5 12L9.5 6" />
            </svg>
          </button>
          <p className="text-xs text-slate-600">
            or drag the card to swap
          </p>
        </div>
      </div>
    </section>
  );
}
