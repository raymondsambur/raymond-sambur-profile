"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const positionStyles = [
  { scale: 1, y: 0 },
  { scale: 0.95, y: -28 },
];

function ProjectCardContent({ project }: { project: ProjectCard }) {
  return (
    <div className="flex h-full w-full flex-col p-8 md:p-10">
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
        >
          <GithubIcon size={18} />
        </a>
      </div>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed mb-6">
        {project.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
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
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-indigo-400 transition-colors group/link mt-auto"
      >
        View on GitHub
        <ArrowUpRight
          size={14}
          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
        />
      </a>
    </div>
  );
}

function AnimatedCard({
  project,
  index,
}: {
  project: ProjectCard;
  index: number;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[1];
  const zIndex = 3 - index;

  return (
    <motion.div
      key={project.id}
      layout
      animate={{ y, scale }}
      exit={{ y: 300, scale: 1, zIndex: 10 }}
      transition={{
        type: "spring",
        duration: 0.8,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg will-change-transform"
    >
      <ProjectCardContent project={project} />
    </motion.div>
  );
}

export default function Projects() {
  const [cards, setCards] = useState(projects);

  const handleSwap = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
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

        {/* Animated Card Stack */}
        <div className="relative h-[420px] sm:h-[380px] w-full max-w-2xl mx-auto overflow-hidden">
          <AnimatePresence initial={false}>
            {cards.slice(0, 2).map((project, index) => (
              <AnimatedCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Swap button */}
        <div className="relative z-10 flex w-full items-center justify-center border-t border-slate-800 pt-6 mt-2">
          <button
            onClick={handleSwap}
            className="flex h-10 cursor-pointer select-none items-center justify-center gap-1.5 overflow-hidden rounded-lg border border-slate-800 bg-slate-900 px-5 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-indigo-300 hover:border-indigo-500/30 active:scale-[0.98]"
          >
            Next Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              <path d="M9.5 18L15.5 12L9.5 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
