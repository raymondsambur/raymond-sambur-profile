"use client";

import { Zap, RefreshCw, Target, Layers } from "lucide-react";
import { motion } from "framer-motion";

const philosophyCards = [
  {
    icon: Zap,
    title: "High-Speed Execution",
    description:
      "Optimizing feedback loops through parallel test execution and streamlined CI/CD pipelines to accelerate delivery.",
  },
  {
    icon: RefreshCw,
    title: "Adaptive & Flexible",
    description:
      "Rapidly adapting to new frameworks, tools, and methodologies to meet evolving project demands.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Architecting robust automation solutions that catch defects early and ensure mission-critical system stability.",
  },
  {
    icon: Layers,
    title: "Versatile Solutions",
    description:
      "Bridging the gap between manual QA and automated execution with AI-powered testing strategies.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Senior SDET with over 5 years of experience at DANA Indonesia,
            specializing in high-scale financial technology environments. I
            architect automated testing frameworks, streamline CI/CD pipelines,
            and leverage Generative AI to bridge the gap between manual QA and
            automated execution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {philosophyCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-7 bg-slate-950 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-5 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                <card.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
