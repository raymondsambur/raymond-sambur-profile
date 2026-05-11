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

interface Card {
  id: number;
  contentType: number;
}

const projectData: Record<
  number,
  { title: string; summary: string; tags: string[]; sourceUrl: string }
> = {
  1: {
    title: "Automation Script Generator",
    summary:
      "An autonomous E2E testing framework that bridges manual test case management and automated execution. Leverages Generative AI to automatically generate robust Playwright test scripts directly from Notion test tickets.",
    tags: ["Playwright", "Generative AI", "Notion API", "TypeScript", "Node.js"],
    sourceUrl: "https://github.com/raymondsambur/automation-script-generator",
  },
  2: {
    title: "UI & API Automation — Playwright",
    summary:
      "A comprehensive test automation framework covering both UI and API layers using Playwright. Implements best practices for scalable test architecture including page object models, API request builders, and parallel execution.",
    tags: ["Playwright", "TypeScript", "API Testing", "Page Object Model", "CI/CD"],
    sourceUrl: "https://github.com/raymondsambur/ui-api-automation-playwright",
  },
};

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 1 },
];

// Same position styles as style3
const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

// Same exit/enter animations as style3
const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
};

const enterAnimation = {
  y: -16,
  scale: 0.9,
};

function CardContent({ contentType }: { contentType: number }) {
  const data = projectData[contentType] ?? projectData[1];

  return (
    <div className="flex h-full w-full flex-col gap-4 p-6 sm:p-8">
      {/* Title + GitHub link */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg sm:text-xl font-bold text-slate-100">
          {data.title}
        </h3>
        <a
          href={data.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 text-slate-400 transition-all duration-200 shrink-0"
          aria-label="Source code"
        >
          <GithubIcon size={16} />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-grow">
        {data.summary}
      </p>

      {/* Tags + CTA */}
      <div className="flex w-full items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={data.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-indigo-600 hover:bg-indigo-500 pl-4 pr-3 text-sm font-medium text-white transition-colors"
        >
          View
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card;
  index: number;
  isAnimating: boolean;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;

  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : undefined;

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-2xl border-x border-t border-slate-800 bg-slate-900 shadow-lg shadow-black/20 will-change-transform sm:w-[560px]"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  );
}

export default function Projects() {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);

  const handleAnimate = () => {
    setIsAnimating(true);

    const nextContentType = (cards[2].contentType % 2) + 1;

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }]);
    setNextId((prev) => prev + 1);
    setIsAnimating(false);
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
          className="text-center mb-12"
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

        {/* Card Stack — same structure as style3 */}
        <div className="flex w-full flex-col items-center justify-center pt-2">
          <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
            <AnimatePresence initial={false}>
              {cards.slice(0, 3).map((card, index) => (
                <AnimatedCard
                  key={card.id}
                  card={card}
                  index={index}
                  isAnimating={isAnimating}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-slate-800 py-4">
            <button
              onClick={handleAnimate}
              className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-slate-800 bg-slate-900 px-4 font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-indigo-300 hover:border-indigo-500/30 active:scale-[0.98]"
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
      </div>
    </section>
  );
}
